# Generated by Django 3.1.7 on 2021-03-22 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_auto_20210322_0050'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='detail_source',
            field=models.FileField(blank=True, editable=False, null=True, upload_to='project_detail_source'),
        ),
    ]