from django.shortcuts import render
from django.views.generic import ListView
from .models import Project

# Create your views here.
class HomeView(ListView):
    model = Project
    template_name = 'home.html'
    
def contact_view(request):
    return render(request, 'contact.html', {})