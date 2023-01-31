from django.db import models

# Create your models here.

from produit.models import Product


class Order(models.Model):
    prenom = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    wilaya = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    paid_amount = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)

    class Meta:
        ordering = ['-created_at', ]

    def __str__(self):
        return self.nom +' '+ self.prenom


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='items', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.IntegerField(default=1)
    product_name=models.CharField(max_length=100, default="")
    #discount = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)

    def __str__(self):
        return '%s' % self.id