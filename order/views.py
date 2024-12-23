from django.shortcuts import render

from django.conf import settings
from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import render

from rest_framework import status, authentication, permissions, generics
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Order, OrderItem
from .serializers import OrderSerializer


class OrderCreate(APIView):
    @api_view(['POST'])
    def checkout(request):
        serializer = OrderSerializer(data=request.data)

        if serializer.is_valid():
            paid_amount = sum(
                item.get('quantity') * item.get('product').price for item in serializer.validated_data['items'])

            try:
                serializer.save(user=request.user, paid_amount=paid_amount)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Order(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        paid_amount = sum(
            item.get('quantity') * item.get('product').price *( 1 - item.get('product').discount) for item in serializer.validated_data['items'])
        tarif_livraison = serializer.validated_data['tarif_livraison']
        paid_amount= paid_amount + tarif_livraison
        serializer.save( paid_amount=paid_amount)