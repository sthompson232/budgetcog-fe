from django.urls import path
from . import views

urlpatterns = [
    path('color-selector/', views.ColorSelector.as_view(), name='color-selector'),
    path('background-selector/', views.BackgroundSelector.as_view(), name='background-selector'),
]