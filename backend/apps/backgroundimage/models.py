from django.db import models


class BackgroundImg(models.Model):
    class Meta(object):
        db_table = 'backgroundImg'

    name = models.CharField(
        'name', blank=False, null=False,  max_length=50, db_index=True,
    )
    image = models.ImageField(
        'image'
    )

    def __str__(self):
        return self.name
