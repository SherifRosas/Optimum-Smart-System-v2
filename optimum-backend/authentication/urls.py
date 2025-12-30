from django.urls import path
from . import views

app_name = 'authentication'

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.get_user_profile, name='profile'),
    path('profile/update/', views.update_user_profile, name='update_profile'),
    path('admin/users/', views.admin_list_users, name='admin_list_users'),
    path('admin/users/create/', views.admin_create_user, name='admin_create_user'),
    path('admin/users/<int:user_id>/update/', views.admin_update_user, name='admin_update_user'),
    path('password-reset/request/', views.request_password_reset, name='request_password_reset'),
    path('admin/password-reset/requests/', views.admin_list_password_resets, name='admin_list_password_resets'),
    path('admin/password-reset/requests/<int:pk>/decision/', views.admin_decide_password_reset, name='admin_decide_password_reset'),
]

