from django.db import models

# Create your models here.

class Transaction(models.Model):
    # Opções de transação
    CATEGORY_CHOICE = [
        ('income', 'Receita'),
        ('expense', 'Despesa')
    ]

    name = models.CharField(max_length = 100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICE)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.amount}"
    


    