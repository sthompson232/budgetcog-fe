from django.contrib import admin
from django.urls import path, include
from users.views import GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls'), name='socialaccount_signup'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('users/', include('users.urls')),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google-login')
]
