from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework import status

import datetime
from decimal import Decimal

from .models import Month, Expense, Category
from users.models import Profile
from .utils import get_month_name, get_month_and_year
from .serializers import ExpenseSerializer, ProfileSerializer, CategorySerializer, MonthSerializer


##############################################################################################################
# EXPENSES

class ThisMonthExpenses(APIView):

    def get(self, request):
        if request.GET.get('month') and request.GET.get('year'):
            month = request.GET.get('month')
            year = request.GET.get('year')
        else:
            month, year = get_month_and_year()
        selected_month = Month.objects.get(user=request.user, year=year, month=month)
        expenses = selected_month.expense_set.all()
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecurringExpenses(APIView):

    def get(self, request):
        current_month, current_year = get_month_and_year()
        query_month = request.GET.get('month')
        query_year = request.GET.get('year')
        if query_month and query_year:
            if int(query_month) == current_month and int(query_year) == current_year:
                recurring = Expense.objects.filter(user=request.user, recurring=True)
            else:
                recurring = Expense.objects.none()
        else:
            recurring = Expense.objects.filter(user=request.user, recurring=True)

        serializer = ExpenseSerializer(recurring, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class NewRecurringExpense(APIView):

    def post(self, request):
        if request.data['name'] and request.data['cost'] and request.data['category']:
            category = Category.objects.get(name=request.data['category'])
            expense = Expense.objects.create(
                name = request.data['name'],
                cost = request.data['cost'],
                category = category,
                recurring = True,
                user = request.user
                )
            expense.save()
            month, year = get_month_and_year()
            month = Month.objects.get(month=month, year=year, user=request.user)
            month.expense_total += Decimal(request.data['cost'])
            month.save()
            print(request.data)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UpdateExpense(APIView):

    def post(self, request):
        expense = Expense.objects.get(id=request.data['id'])
        cost_difference = expense.cost - Decimal(request.data['cost'])
        if expense.month:
            expense.month.expense_total -= cost_difference
            expense.month.save()
        expense.name = request.data['name']
        if request.data['date']:
            expense.date = datetime.datetime.fromtimestamp(int(request.data['date']) / float(1000))
        expense.cost = Decimal(request.data['cost'])
        expense.category = Category.objects.get(name=request.data['category'])
        expense.save()
        return Response(status=status.HTTP_200_OK)


class NewExpense(APIView):

    def post(self, request):
        if request.data['name'] and request.data['cost'] and request.data['category']:
            month = Month.objects.get(user=request.user, month=request.data['month'], year=request.data['year'])
            category = Category.objects.get(name=request.data['category'])
            if request.data['date']:
                date = datetime.datetime.fromtimestamp(int(request.data['date']) / float(1000))
            else:
                date = None
            expense = Expense.objects.create(
                name=request.data['name'],
                date=date,
                cost=request.data['cost'],
                month=month,
                user=request.user,
                recurring=False,
                category=category
            )
            expense.save()
            month.expense_total += Decimal(request.data['cost'])
            month.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DeleteExpense(APIView):

    def post(self, request):
        expense = Expense.objects.get(id=request.data['id'])
        expense.delete()
        if expense.month:
            expense.month.expense_total -= expense.cost
            expense.month.save()
        else:
            month, year = get_month_and_year()
            current_month = Month.objects.get(user=request.user, year=year, month=month)
            current_month.expense_total -= expense.cost 
            current_month.save()
        return Response(status=status.HTTP_200_OK)


##############################################################################################################
# MONTHS


class GetCurrentMonth(APIView):

    def get(self, request):
        month, year = get_month_and_year()
        name = get_month_name(month)
        current_month, created = Month.objects.get_or_create(user=request.user, year=year, month=month, name=name)
        serializer = MonthSerializer(current_month, many=False)

        if created:
            recurring_expense = Expense.objects.filter(user=request.user, recurring=True)

            last_month = Month.objects.filter(user=request.user).order_by('date_created').first()
            if last_month:
                for recurring in recurring_expense:
                    Expense.objects.create(
                        name=recurring.name,
                        cost=recurring.cost,
                        month=last_month,
                        user=request.user,
                        recurring=False,
                        category=recurring.category
                    )
                    last_month.expense_total -= Decimal(recurring.cost)
                    current_month.expense_total += float(recurring.cost)
                last_month.save()
                current_month.save()
                
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_200_OK)


class GetPastMonths(APIView):

    def get(self, request):
        months = Month.objects.filter(user=request.user).order_by('-date_created')
        serializer = MonthSerializer(months, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


##############################################################################################################
# PROFILE

class UserProfile(APIView):

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class IsNewUser(APIView):

    def get(self, request):
        is_new = request.user.profile.new_user 
        return Response(is_new, status=status.HTTP_200_OK)


class SetNewUser(APIView):

    def get(self, request):
        request.user.profile.new_user = False 
        request.user.profile.save()
        return Response(status=status.HTTP_200_OK) 


class Budget(APIView):

    def post(self, request):
        request.user.profile.budget = Decimal(request.data)
        request.user.profile.save()
        return Response(status=status.HTTP_200_OK)


class Goal(APIView):

    def post(self, request):
        request.user.profile.goal = Decimal(request.data) 
        request.user.profile.save()
        return Response(status=status.HTTP_200_OK)


class GetTotalSaved(APIView):

    def get(self, request):
        expenses = Expense.objects.filter(user=request.user)
        months = Month.objects.filter(user=request.user).count()
        budget = request.user.profile.budget 
        allowance = months * budget 
        spent = 0
        for expense in expenses:
            spent += expense.cost 
        saved = allowance - spent
        return Response(saved, status=status.HTTP_200_OK) 


class ColorSelector(APIView):

    def get(self, request):
        color = request.user.profile.color 
        return Response(color)

    def post(self, request):
        request.user.profile.color = request.data['payload']
        request.user.profile.save()
        return Response(status=status.HTTP_200_OK)


class BackgroundSelector(APIView):

    def get(self, request):
        background = request.user.profile.background 
        return Response(background, status=status.HTTP_200_OK)

    def post(self, request):
        request.user.profile.background = request.data['payload']
        request.user.profile.save()
        return Response(status=status.HTTP_200_OK)


##############################################################################################################
# CATEGORIES

class GetCategories(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
