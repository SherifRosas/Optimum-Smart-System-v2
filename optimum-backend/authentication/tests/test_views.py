import pytest
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

from authentication.models import UserProfile

User = get_user_model()


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def user(db):
    u = User.objects.create_user(
        username="existinguser",
        email="existing@example.com",
        password="TestPass123!",
        first_name="Existing",
        last_name="User",
    )
    UserProfile.objects.create(user=u)
    return u


@pytest.fixture
def authenticated_client(api_client, user):
    refresh = RefreshToken.for_user(user)
    api_client.credentials(HTTP_AUTHORIZATION=f"Bearer {refresh.access_token}")
    return api_client


@pytest.mark.django_db
class TestAuthentication:
    def test_register_user(self, api_client):
        url = reverse("authentication:register")
        payload = {
            "username": "testuser",
            "email": "test@example.com",
            "password": "TestPass123!",
            "password2": "TestPass123!",
            "first_name": "Test",
            "last_name": "User",
        }
        response = api_client.post(url, payload, format="json")

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["success"] is True
        assert "tokens" in response.data
        assert "access" in response.data["tokens"]
        assert "refresh" in response.data["tokens"]
        assert User.objects.filter(username="testuser").exists()

    def test_login(self, api_client, user):
        url = reverse("authentication:login")
        response = api_client.post(
            url,
            {"username": "existinguser", "password": "TestPass123!"},
            format="json",
        )

        assert response.status_code == status.HTTP_200_OK
        assert response.data["success"] is True
        assert "tokens" in response.data
        assert "access" in response.data["tokens"]
        assert "refresh" in response.data["tokens"]

    def test_refresh_token(self, api_client, user):
        refresh = RefreshToken.for_user(user)
        url = reverse("token_refresh")
        response = api_client.post(url, {"refresh": str(refresh)}, format="json")

        assert response.status_code == status.HTTP_200_OK
        assert "access" in response.data

    def test_get_user_profile(self, authenticated_client):
        url = reverse("authentication:profile")
        response = authenticated_client.get(url)

        assert response.status_code == status.HTTP_200_OK
        assert response.data["success"] is True
        assert "user" in response.data

    def test_update_user_profile(self, authenticated_client, user):
        url = reverse("authentication:update_profile")
        response = authenticated_client.patch(
            url, {"phone_number": "1234567890", "company_name": "Test Company"}, format="json"
        )

        assert response.status_code == status.HTTP_200_OK
        assert response.data["success"] is True
        user.profile.refresh_from_db()
        assert user.profile.phone_number == "1234567890"
        assert user.profile.company_name == "Test Company"

    def test_input_sanitization(self, api_client):
        url = reverse("authentication:register")
        payload = {
            "username": "<script>alert('x')</script>user",
            "email": "xss@example.com",
            "password": "TestPass123!",
            "password2": "TestPass123!",
            "first_name": "X",
            "last_name": "Y",
        }
        response = api_client.post(url, payload, format="json")

        # Implementation may reject or sanitize; either is acceptable as long as it does not store raw tags.
        assert response.status_code in (status.HTTP_201_CREATED, status.HTTP_400_BAD_REQUEST)
        if response.status_code == status.HTTP_201_CREATED:
            u = User.objects.get(email="xss@example.com")
            assert "<" not in u.username and ">" not in u.username


