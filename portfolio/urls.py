from django.urls import path
from .views import project_list, bio

urlpatterns = [
    path('api/project-list/', project_list, name='project-list'),
    path('api/bio/', bio, name='bio')
]
