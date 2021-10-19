from .models import BackgroundImg
from rest_framework import serializers


class BackgroundImgSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    image = serializers.ImageField()

    class Meta:
        Model = BackgroundImg
        fields = ('__all__')
