from .models import backgroundImg
from rest_framework import serializers

class BackgroundImg(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(required=True)
    image = serializers.ImageField(required=True)

    class Meta:
        Model = BackgroundImg
        fields = ('__all__')
    