from django.urls import path
from . import views

urlpatterns = [
    path('transacoes', views.get_data),
    path('add/', views.add_data)
]