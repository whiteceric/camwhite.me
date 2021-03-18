from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title