from django.urls import path
from .views import *

urlpatterns = [
    path('', UserBackgroundList.as_view(), name='user_list'),
    path('add/', UserBackgroundAdd.as_view(), name='add'),
    path('images/<int:pk>/', UserBackgroundImage.as_view(),
         name='create_user_background'),
]
