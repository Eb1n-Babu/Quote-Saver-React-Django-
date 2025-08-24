from rest_framework import viewsets
from api.models import QuoteModel
from api.serializers import QuoteSerializer


# Create your views here.
class QuotesViewSet(viewsets.ModelViewSet):
    queryset = QuoteModel.objects.all()
    serializer_class = QuoteSerializer
