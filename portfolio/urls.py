from django.urls import path
from .views import project_list, bio, project_detail

urlpatterns = [
    path('project-list/', project_list, name='project-list'),
    path('bio/', bio, name='bio'),
    path('project/<str:slugified_name>/', project_detail, name='project-detail'),
]
