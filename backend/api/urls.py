from django.urls import path
from . import views

urlpatterns = [
    path('user-profile/', views.UserProfile.as_view(), name='user-profile'),
    path('is-new-user/', views.IsNewUser.as_view(), name='is-new-user'),
    path('set-new-user/', views.SetNewUser.as_view(), name='set-new-user'),
    
    path('budget/', views.Budget.as_view(), name='budget'),
    path('goal/', views.Goal.as_view(), name='goal'),
    path('get-total-saved/', views.GetTotalSaved.as_view(), name='get-total-saved'),
    path('color-selector/', views.ColorSelector.as_view(), name='color-selector'),
    path('background-selector/', views.BackgroundSelector.as_view(), name='background-selector'),

    path('this-month-expenses/', views.ThisMonthExpenses.as_view(), name='this-month-expenses'),
    path('recurring-expenses/', views.RecurringExpenses.as_view(), name='recurring-expenses'),
    path('expense/', views.UpdateExpense.as_view(), name='expense'),
    path('delete-expense/', views.DeleteExpense.as_view(), name='delete-expense'),
    path('new-expense/', views.NewExpense.as_view(), name='new-expense'),
    path('new-recurring-expense/', views.NewRecurringExpense.as_view(), name='new-recurring-expense'),

    path('get-categories/', views.GetCategories.as_view(), name='get-categories'),
    path('get-past-months/', views.GetPastMonths.as_view(), name='get-past-months'),
    path('get-current-month/', views.GetCurrentMonth.as_view(), name='get-current-month'),
]