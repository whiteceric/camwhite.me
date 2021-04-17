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
    detail_source = models.FileField(upload_to='', storage=custom_storage, null=True, blank=True, editable=False) 

    def save(self, *args, **kwargs):
        print(settings.PROJECT_DETAIL_ROOT)
        self.slugified_name = slugify(self.title)
        super().save(*args, **kwargs)
        if not self.detail_source:
            # Copy the __template__ html file to a new html file with slugified_name as the name (+'.html')
            filename = f'{self.slugified_name}.js'
            filepath = os.path.join(settings.PROJECT_DETAIL_ROOT, filename)
            the_file = open(filepath, 'w')
            copy(os.path.join(settings.PROJECT_DETAIL_ROOT, 'templateDetailView.js'), filepath)
            the_file.close()
            detail_file = File(open(filepath, 'r'))
            self.detail_source.save(filename, detail_file)

    def __str__(self):
        return self.title
