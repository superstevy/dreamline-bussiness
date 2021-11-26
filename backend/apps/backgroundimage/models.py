from django.db import models
from cloudinary.models import CloudinaryField

class BackgroundImg(models.Model):
    class Meta(object):
        db_table = 'backgroundImg'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )

    def __str__(self):
        return self.name
