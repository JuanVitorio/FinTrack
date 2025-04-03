from rest_framework.response import Response
from rest_framework.decorators import api_view
from transactions.models import Transaction
from .serializers import TransactionSerializer

@api_view(['GET'])
def get_data(request): # dados da api
    item = Transaction.objects.all()
    serializer = TransactionSerializer(item, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_data(request):
    serializer = TransactionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)