from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Project, WebDevContact
from django.conf import settings
from django.http import HttpResponse
import os
import json
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProjectSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_detail(request, slugified_name):
    try:
        project = Project.objects.get(slugified_name=slugified_name)
        serializer = ProjectSerializer(project, many=False)
        return Response(serializer.data)
    except Project.DoesNotExist as e:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def bio(request):
    with open(os.path.join(settings.STATIC_ROOT, 'portfolio/bio.json'), 'rb') as bio_json:
        bio_json = json.load(bio_json)
        return Response(bio_json)

@api_view(['POST'])
def new_web_dev_contact(request):
    data = request.data
    if type(data) is not dict:
        return Response('WebDevContact data should be sent as')
    elif set(data.keys()) != {'email', 'name', 'body'}:
        return Response('Incorrect WebDevContact Keys')
    contact = WebDevContact(**data)
    contact.save()
    contact.send()
    return Response(request.data)

def send_web_dev_contact(request, id):
    contact = WebDevContact.objects.get(id=id)
    contact.send()
    return Response("Contact Sent.")
