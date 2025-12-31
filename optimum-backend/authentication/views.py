from datetime import timedelta

from django.contrib.auth import authenticate, get_user_model
from django.db import transaction
from django_ratelimit.decorators import ratelimit
from django.utils import timezone
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from django.conf import settings
from ai_services import generate_secure_password
from .models import PasswordResetRequest, UserProfile
from .serializers import (
    AdminUserSerializer,
    PasswordResetActionSerializer,
    PasswordResetRequestSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
    UserSerializer,
)

User = get_user_model()
ADMIN_EMAIL = getattr(settings, 'ADMIN_EMAIL', 'admin@example.com')


def _get_user_role(user):
    try:
        return user.profile.role or UserProfile.RoleChoices.PRODUCT_REQUESTER
    except UserProfile.DoesNotExist:
        return UserProfile.RoleChoices.PRODUCT_REQUESTER


def _is_admin_user(user):
    if not user.is_authenticated:
        return False
    email_match = (user.email or '').lower() == ADMIN_EMAIL.lower()
    role = _get_user_role(user)
    return email_match or role in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}


@ratelimit(key='ip', rate='5/m', method='POST', block=True)
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register(request):
    """
    User registration endpoint
    """
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'success': True,
            'message': 'User registered successfully',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
            },
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_201_CREATED)
    
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@ratelimit(key='ip', rate='10/m', method='POST', block=True)
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login(request):
    """
    User login endpoint - accepts username or email
    """
    username_or_email = request.data.get('username')
    password = request.data.get('password')
    
    if not username_or_email or not password:
        return Response({
            'success': False,
            'error': 'Username/Email and password are required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # Try to authenticate with username first
    user = authenticate(username=username_or_email, password=password)
    
    # If that fails, try to find user by email and authenticate
    if user is None:
        try:
            user_by_email = User.objects.get(email__iexact=username_or_email)
            user = authenticate(username=user_by_email.username, password=password)
        except User.DoesNotExist:
            user = None
    
    if user is not None:
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        # Get user profile
        try:
            profile = user.profile
        except UserProfile.DoesNotExist:
            profile = UserProfile.objects.create(user=user)
        
        return Response({
            'success': True,
            'message': 'Login successful',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            },
            'profile': {
                'phone_number': profile.phone_number,
                'company_name': profile.company_name,
                'role': profile.role,
            },
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_200_OK)
    
    return Response({
        'success': False,
        'error': 'Invalid username or password'
    }, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_profile(request):
    """
    Get current user profile
    """
    try:
        profile = request.user.profile
        serializer = UserProfileSerializer(profile)
        return Response({
            'success': True,
            'user': serializer.data
        }, status=status.HTTP_200_OK)
    except UserProfile.DoesNotExist:
        # Create profile if it doesn't exist
        profile = UserProfile.objects.create(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response({
            'success': True,
            'user': serializer.data
        }, status=status.HTTP_200_OK)


@api_view(['PUT', 'PATCH'])
@permission_classes([permissions.IsAuthenticated])
def update_user_profile(request):
    """
    Update current user profile
    """
    try:
        profile = request.user.profile
    except UserProfile.DoesNotExist:
        profile = UserProfile.objects.create(user=request.user)
    
    serializer = UserProfileSerializer(profile, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'success': True,
            'message': 'Profile updated successfully',
            'user': serializer.data
        }, status=status.HTTP_200_OK)
    
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def logout(request):
    """
    User logout endpoint (blacklist refresh token)
    """
    try:
        refresh_token = request.data.get('refresh_token')
        if refresh_token:
            token = RefreshToken(refresh_token)
            token.blacklist()
        
        return Response({
            'success': True,
            'message': 'Logout successful'
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def admin_list_users(request):
    if not _is_admin_user(request.user):
        return Response({'detail': 'Admin access required.'}, status=status.HTTP_403_FORBIDDEN)
    users = User.objects.select_related('profile').order_by('-date_joined')
    serializer = AdminUserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def admin_create_user(request):
    if not _is_admin_user(request.user):
        return Response({'detail': 'Admin access required.'}, status=status.HTTP_403_FORBIDDEN)

    data = request.data
    email = data.get('email')
    username = data.get('username') or (email.split('@')[0] if email else None)
    if not email or not username:
        return Response({'detail': 'Username and email are required.'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'detail': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
    if User.objects.filter(email=email).exists():
        return Response({'detail': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    role = data.get('role', UserProfile.RoleChoices.PRODUCT_REQUESTER)
    status_value = data.get('status', UserProfile.StatusChoices.PENDING)
    suggested_password = data.get('password') or generate_secure_password(username)

    with transaction.atomic():
        user = User.objects.create_user(
            username=username,
            email=email,
            first_name=data.get('first_name', ''),
            last_name=data.get('last_name', ''),
        )
        user.set_password(suggested_password)
        user.save()

        # Handle metadata (location, additional data)
        metadata = data.get('metadata', {})
        
        profile = UserProfile.objects.create(
            user=user,
            role=role,
            status=status_value,
            phone_number=data.get('phone_number', ''),
            company_name=data.get('company_name', ''),
            metadata=metadata,
            created_by=request.user
        )

    serializer = AdminUserSerializer(user)
    return Response(
        {
            'user': serializer.data,
            'generated_password': suggested_password,
            'message': 'User created successfully.'
        },
        status=status.HTTP_201_CREATED
    )


@api_view(['PATCH'])
@permission_classes([permissions.IsAuthenticated])
def admin_update_user(request, user_id):
    if not _is_admin_user(request.user):
        return Response({'detail': 'Admin access required.'}, status=status.HTTP_403_FORBIDDEN)
    try:
        user = User.objects.select_related('profile').get(id=user_id)
    except User.DoesNotExist:
        return Response({'detail': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = AdminUserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def request_password_reset(request):
    email = request.data.get('email')
    reason = request.data.get('reason', '')
    if not email:
        return Response({'detail': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        target_user = User.objects.get(email__iexact=email)
    except User.DoesNotExist:
        return Response({'detail': 'If an account exists for that email, the admin will review the request.'})

    expires_at = timezone.now() + timedelta(minutes=30)
    reset_request = PasswordResetRequest.objects.create(
        target_user=target_user,
        requested_by=request.user if request.user.is_authenticated else None,
        reason=reason,
        expires_at=expires_at
    )
    serializer = PasswordResetRequestSerializer(reset_request)
    return Response(
        {
            'message': 'Password reset request submitted for admin approval.',
            'request': serializer.data
        },
        status=status.HTTP_201_CREATED
    )


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def admin_list_password_resets(request):
    if not _is_admin_user(request.user):
        return Response({'detail': 'Admin access required.'}, status=status.HTTP_403_FORBIDDEN)
    requests_qs = PasswordResetRequest.objects.select_related('target_user', 'requested_by').order_by('-created_at')
    serializer = PasswordResetRequestSerializer(requests_qs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def admin_decide_password_reset(request, pk):
    if not _is_admin_user(request.user):
        return Response({'detail': 'Admin access required.'}, status=status.HTTP_403_FORBIDDEN)
    try:
        reset_request = PasswordResetRequest.objects.select_related('target_user').get(pk=pk)
    except PasswordResetRequest.DoesNotExist:
        return Response({'detail': 'Password reset request not found.'}, status=status.HTTP_404_NOT_FOUND)

    if reset_request.status not in {PasswordResetRequest.StatusChoices.PENDING, PasswordResetRequest.StatusChoices.APPROVED}:
        return Response({'detail': 'This request has already been processed.'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = PasswordResetActionSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    approve = serializer.validated_data['approve']
    if approve:
        new_password = serializer.validated_data['new_password']
        reset_request.target_user.set_password(new_password)
        reset_request.target_user.save()
        reset_request.status = PasswordResetRequest.StatusChoices.COMPLETED
        reset_request.approved_at = timezone.now()
        reset_request.decided_by = request.user
        reset_request.save(update_fields=['status', 'approved_at', 'decided_by'])
        return Response({'detail': 'Password reset approved and applied.', 'new_password': new_password})

    reset_request.status = PasswordResetRequest.StatusChoices.DENIED
    reset_request.decided_by = request.user
    reset_request.save(update_fields=['status', 'decided_by'])
    return Response({'detail': 'Password reset request denied.'})

