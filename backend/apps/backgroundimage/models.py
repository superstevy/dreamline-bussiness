from django.db import models


class BackgroundImg(models.Model):
    class Meta(object):
        db_table = 'backgroundImg'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    image = models.ImageField(
        'image'
    )

    def __str__(self):
        return self.name
