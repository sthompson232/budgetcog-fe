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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.email}: {self.name} {str(self.year)}'


class Expense(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    cost = models.DecimalField(decimal_places=2, max_digits=8)
    description = models.TextField(max_length=1000)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name
