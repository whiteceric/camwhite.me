from django.db import models
from django.utils.text import slugify
from shutil import copy
from django.conf import settings
from django.core.files import File
from django.core.files.storage import FileSystemStorage
from django.core.mail import send_mail
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
    email = models.EmailField()
    name = models.TextField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def send(self):
        '''
        Send this email to myself
        '''
        subject = f'{self.name} sent a message via camwhite.me'
        message = f'{subject}\nSent at: {self.created}\n\nMessage:\n{self.body}\n\nEmail:{self.email}'
        send_mail(
            subject, # subject
            message, # body
            settings.EMAIL_HOST_USER, # from
            ['contact@camwhite.me'], # to
        )

    def __str__(self):
        return self.email
