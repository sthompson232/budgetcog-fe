from django.urls import path
from . import views

urlpatterns = [
    path('color-selector/', views.ColorSelector.as_view(), name='color-selector'),
    path('background-selector/', views.BackgroundSelector.as_view(), name='background-selector'),
    path('get-current-month/', views.CreateMonths.as_view(), name='get-current-month'),
    path('this-month-expenses/', views.ThisMonthExpenses.as_view(), name='this-month-expenses'),
    path('recurring-expenses/', views.RecurringExpenses.as_view(), name='recurring-expenses'),
    path('user-profile/', views.UserProfile.as_view(), name='user-profile'),
    path('budget/', views.Budget.as_view(), name='budget'),
    path('goal/', views.Goal.as_view(), name='goal'),
    path('expense/', views.SingleExpense.as_view(), name='expense'),
]