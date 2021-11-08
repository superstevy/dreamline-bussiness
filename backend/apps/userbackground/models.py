from django.db import models
from apps.backgroundimage.models import BackgroundImg
from apps.user.models import UserAccount


class UserBackground(models.Model):
    class Meta(object):
        db_table = 'userBackground'

    user = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, null=True, blank=True, db_index=True
    )

    username = models.CharField(
        'User name', blank=False, null=True, max_length=100, db_index=True,
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
    background_id = models.ForeignKey(BackgroundImg,
                                      related_name='background_image', db_index=True, on_delete=models.CASCADE,
                                      )
    generated_background = models.ImageField(
        'generated background', blank=False, null=True, max_length=255
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=False, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
