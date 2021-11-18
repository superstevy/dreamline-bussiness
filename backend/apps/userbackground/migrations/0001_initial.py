# Generated by Django 3.2.4 on 2021-11-16 23:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
        ('backgroundimage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserBackground',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(db_index=True, max_length=100, verbose_name='User Name')),
                ('company_name', models.CharField(max_length=100, verbose_name='Company Name')),
                ('company_logo', models.ImageField(max_length=140, upload_to='', verbose_name='Company Logo')),
                ('role', models.CharField(max_length=50, verbose_name='Role In Companty')),
                ('generated_background', models.ImageField(blank=True, max_length=255, null=True, upload_to='', verbose_name='Generated Background')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Creation Date')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Update Date')),
                ('background_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='background_image', to='backgroundimage.backgroundimg')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.useraccount')),
            ],
            options={
                'db_table': 'user_background',
            },
        ),
    ]
