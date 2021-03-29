from django.urls import path
from .views import HomeView, contact_view, ProjectView, resume_view

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('project/<str:slugified_name>', ProjectView.as_view(), name='project-detail'),
    path('contact/', contact_view, name='contact'),
    path('resume/', resume_view, name='resume'),
]
