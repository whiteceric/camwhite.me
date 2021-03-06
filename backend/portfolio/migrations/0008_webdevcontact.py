# Generated by Django 3.1.7 on 2021-09-02 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0007_remove_project_detail_source'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebDevContact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('work_type', models.CharField(choices=[('Full Stack (entire web application)', 'Full Stack'), ('Front End (user facing features)', 'Frontend'), ('Back End (new site functionality and database features)', 'Backend')], max_length=64)),
                ('business_description', models.TextField()),
                ('project_description', models.TextField()),
            ],
        ),
    ]
