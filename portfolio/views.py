from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Project
from django.conf import settings
from django.http import HttpResponse
import os
import json
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProjectSerializer

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
# might keep, dunno if I can use django views still (with React)
def resume_view(request):
    with open(os.path.join(settings.STATIC_ROOT, 'portfolio/resume.pdf'), 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=resume.pdf'
        return response
    pdf.closed
