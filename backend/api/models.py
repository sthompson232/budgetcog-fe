from django.db import models
from users.models import User

class Category(models.Model):
    name = models.CharField(max_length=200)
    icon = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Month(models.Model):
    name = models.CharField(max_length=100)
    month = models.IntegerField()
    year = models.IntegerField()
    expense_total = models.DecimalField(decimal_places=2, max_digits=8, default=0.00)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.email}: {self.name} {str(self.year)}'


class Expense(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField(blank=True, null=True)
    cost = models.DecimalField(decimal_places=2, max_digits=8)
    month = models.ForeignKey(Month, on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recurring = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)


    def __str__(self):
        return self.name
