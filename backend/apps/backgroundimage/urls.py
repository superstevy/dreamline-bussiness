from django.urls import path 
from . import views

urlpatterns = [
    path('', views.BackgroundImgList.as_view(), name= 'Background-images'),
]
