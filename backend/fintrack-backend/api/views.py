from rest_framework.response import Response
from rest_framework.decorators import api_view
from transactions.models import Transaction
from .serializers import TransactionSerializer

@api_view(['GET'])
def get_data(request): # Pegar dados por GET
    item = Transaction.objects.all()
    serializer = TransactionSerializer(item, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_data(request): # Enviar dados por post
    serializer = TransactionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)