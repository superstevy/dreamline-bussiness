from django.shortcuts import render
from rest_framework import generics
from .models import BackgroundImg
from .serializers import BackgroundImgSerializer

# Create your views here.


class BackgroundImgList(generics.ListAPIView):
    queryset = BackgroundImg.objects.all()
    serializer_class = BackgroundImgSerializer
