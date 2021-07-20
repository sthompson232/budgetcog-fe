from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.TestView.as_view(), name='test'),
    path('color-selector/', views.ColorSelector.as_view(), name='color-selector'),
]