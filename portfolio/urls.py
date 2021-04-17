from django.urls import path
from .views import project_list, bio, project_detail

urlpatterns = [
    path('api/project-list/', project_list, name='project-list'),
    path('api/bio/', bio, name='bio'),
    path('api/project/<str:slugified_name>', project_detail, name='project-detail'),
]
