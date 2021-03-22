from django.db import models
from django.utils.text import slugify
from shutil import copy
from django.conf import settings
from django.core.files import File
import os

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slugified_name = models.SlugField(max_length=510, blank=True, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()
    summary = models.TextField()
    link = models.CharField(max_length=255)
    detail_source = models.FileField(upload_to='project_detail_source', null=True, blank=True, editable=False) 

    def save(self, *args, **kwargs):
        self.slugified_name = slugify(self.title)
        if not self.detail_source:
            # Copy the __template__ html file to a new html file with slugified_name as the name (+'.html')
            filename = f'{self.slugified_name}.html'
            filepath = os.path.join(settings.MEDIA_ROOT, 'project_detail_source', filename)
            the_file = open(filepath, 'w')
            copy(os.path.join(settings.MEDIA_ROOT, 'project_detail_source', '__template__.html'), filepath)
            the_file.close()
            detail_file = File(open(filepath, 'r'))
            self.detail_source.save(filename, detail_file)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
