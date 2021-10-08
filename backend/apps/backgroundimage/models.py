from django.db import models
from cloudinary.models import CloudinaryField

class BackgroundImg(models.Model):
    class Meta(object):
        db_table = 'backgroundImg'

    name = models.CharField(
        'name', blank=False, null=False,  max_length=50, db_index=True,
    )
    image = CloudinaryField(
        'image', blank=False, null=True, db_index=True,
    )