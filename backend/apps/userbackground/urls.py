from django.urls import path
from .views import *

urlpatterns = [
    path('', UserBackgroundList.as_view(), name='user_list'),
    path('userbackground/', UserBackgroundAdd.as_view(),
         name='user_background_add'),
]
