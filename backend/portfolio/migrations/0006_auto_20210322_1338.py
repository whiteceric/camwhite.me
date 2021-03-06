# Generated by Django 3.1.7 on 2021-03-22 13:38

from django.db import migrations, models
import portfolio.models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_auto_20210322_0131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='detail_source',
            field=models.FileField(blank=True, editable=False, null=True, storage=portfolio.models.OverwriteStorage(location='/Users/camwhite/Projects/camwhite.me/media'), upload_to='project_detail_source'),
        ),
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='slugified_name',
            field=models.SlugField(blank=True, editable=False, max_length=510, unique=True),
        ),
    ]
