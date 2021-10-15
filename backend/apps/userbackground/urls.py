from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('',views.UserBackgroundList.as_view, name='userbackground'),
    path('add/', views.UserBackgroundAdd.as_view, name='add'),


]