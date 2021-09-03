from django.urls import path
from .views import project_list, bio, project_detail, new_web_dev_contact

urlpatterns = [
    path('project-list/', project_list, name='project-list'),
    path('bio/', bio, name='bio'),
    path('project/<str:slugified_name>/', project_detail, name='project-detail'),
    path('new-web-dev-contact/', new_web_dev_contact, name='new-web-dev-contact'),
]
