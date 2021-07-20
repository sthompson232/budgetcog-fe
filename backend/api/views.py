from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework import status

import datetime

from .models import Month
from .utils import get_month_name, get_month_and_year


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


class ThisMonth(APIView):

    def get(self, request):
        month, year = get_month_and_year()
        current_month = Month.objects.get(user=request.user, year=year, month=month)
        expenses = current_month.expense_set.all()
        print("expenses", expenses)
        return Response(status=status.HTTP_200_OK)
