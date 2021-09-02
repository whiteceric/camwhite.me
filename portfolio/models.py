from django.db import models
from django.utils.text import slugify
from shutil import copy
from django.conf import settings
from django.core.files import File
from django.core.files.storage import FileSystemStorage
import os

# Create your models here.

# class to ensure that we know the names of project html files
class OverwriteStorage(FileSystemStorage):

    def get_available_name(self, name, max_length=float('inf')):
        if self.exists(name):
            os.remove(os.path.join(self.location, name))
        return name if len(name) <= max_length else super().get_alternative_name()

custom_storage = OverwriteStorage(location=settings.PROJECT_DETAIL_ROOT)

class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slugified_name = models.SlugField(max_length=510, blank=True, unique=True, editable=False)
    start_date = models.DateField()
    end_date = models.DateField()
    summary = models.TextField()
    link = models.CharField(max_length=255, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.slugified_name = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class WebDevContact(models.Model):
    class WebDevWorkTypes(models.TextChoices):
        FULL_STACK = 'Full Stack (entire web application)'
        FRONTEND = 'Front End (user facing features)'
        BACKEND = 'Back End (new site functionality and database features)'

    email = models.EmailField()
    work_type = models.CharField(max_length=64, choices=WebDevWorkTypes.choices)
    business_description = models.TextField()
    project_description = models.TextField()
