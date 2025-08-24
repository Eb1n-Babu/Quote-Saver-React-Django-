from rest_framework import serializers

from api.models import QuoteModel


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteModel
        fields = '__all__'