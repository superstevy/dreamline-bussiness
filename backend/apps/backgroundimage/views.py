from django.shortcuts import render

# Create your views here.
class BackgroundImgList(generics.ListAPIView):
    queryset = BackgroundImg.objects.all()
    serializer_class = BackgroundImgSerializer