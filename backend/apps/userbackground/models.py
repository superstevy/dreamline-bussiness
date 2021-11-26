from django.db.models.deletion import CASCADE
from apps.backgroundimage.models import BackgroundImg
from django.db import models
from apps.user.models import UserAccount
from cloudinary.models import CloudinaryField


class UserBackground(models.Model):
    class Meta(object):
        db_table = 'user_background'
    user = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE
    )
    username = models.CharField(
        'User Name', blank=False, null=False, max_length=100, db_index=True
    )
    company_name = models.CharField(
        'Company Name', blank=False, null=False, max_length=100
    )
    company_logo = CloudinaryField(
        'Company Logo', blank=False, null=False, max_length=140
    )
    role = models.CharField(
        'Role In Companty', blank=False, null=False, max_length=50
    )
    background_id = models.ForeignKey(
        BackgroundImg, related_name='background_image', on_delete=CASCADE, db_index=True, null=True
    )
    generated_background = CloudinaryField(
        'Generated Background', blank=True, null=True, max_length=255
    )
    created_at = models.DateTimeField(
        'Creation Date', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Update Date', blank=True, auto_now=True
    )
