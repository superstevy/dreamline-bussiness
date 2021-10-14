from django.db import models
from django.db.models.fields import DateTimeField
from django.db.models.fields.related import ForeignKey
from apps.backgroundimage.models import BackgroundImg
from cloudinary.models import CloudinaryField

class UserBackground(models.Model):
    class Meta(object):
        db_table = 'userBackground'

    username = models.CharField(
         'User name',blank=False, null=True, max_length=100, db_index=True,
    )
    company_name = models.CharField(
        'Company name', blank=False, null=True, max_length=100, 
    )
    company_logo = models.ImageField(
        'Company logo', blank=False, null=True, max_length=140
    )
    role = models.CharField(
        'Role In Company', max_length=50,  blank=True, null=True
    )
    background_id =models.ForeignKey(BackgroundImg , 
    related_name='background_image',db_index=True, on_delete=CASCADE,
    )
    generated_background= CloudinaryField(
        'generated background', blank=False, null=True , max_length=255
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=False, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )






