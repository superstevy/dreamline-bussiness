from django.db import models
from django.db.models.fields import DateTimeField
from django.db.models.fields.related import ForeignKey
from apps.backgroundimage.models import BackgroundImg
from cloudinary.models import CloudinaryField

class UserBackground(models.Model):
    class Meta(object):
        db_table = 'userBackground'

    username = models.CharField(
         'Username',blank=False, null=True, max_length=50, db_index=True,
    )
    company_name = models.CharField(
        'Company name', blank=False, null=True, max_length=50, db_index=True,
    )
    company_logo = CloudinaryField(
        'Company logo', blank=False, null=True, db_index=True,
    )
    role = models.CharField(
        'Role', max_length=50, db_index=True, blank=True, null=True
    )
    background_id =models.ForeignKey(BackgroundImg ,db_index=True, on_delete=models.CASCADE,
    )
    generated_background= CloudinaryField(
        'generated background', blank=False, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=False, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )






