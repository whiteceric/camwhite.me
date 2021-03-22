from django.db import models
from django.utils.text import slugify

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slugified_name = models.SlugField(max_length=510, blank=True, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()
    link = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        self.slugified_name = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
