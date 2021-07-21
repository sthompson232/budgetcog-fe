from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework import status

import datetime
from decimal import Decimal

from .models import Month, Expense
from users.models import Profile
from .utils import get_month_name, get_month_and_year
from .serializers import ExpenseSerializer, ProfileSerializer


class UserProfile(APIView):

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


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


class CreateMonths(APIView):

    def get(self, request):
        month, year = get_month_and_year()
        name = get_month_name(month)
        current_month, created = Month.objects.get_or_create(user=request.user, year=year, month=month, name=name)

        if created:
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_200_OK)


class ThisMonthExpenses(APIView):

    def get(self, request):
        month, year = get_month_and_year()
        current_month = Month.objects.get(user=request.user, year=year, month=month)
        expenses = current_month.expense_set.all()
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecurringExpenses(APIView):

    def get(self, request):
        recurring = Expense.objects.filter(user=request.user, recurring=True)
        serializer = ExpenseSerializer(recurring, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)