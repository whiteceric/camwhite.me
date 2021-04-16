from django.urls import path
from .views import project_list

urlpatterns = [
    path('api/project-list/', project_list, name='project-list')
]
