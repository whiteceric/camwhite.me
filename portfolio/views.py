from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Project

# Create your views here.
class HomeView(ListView):
    model = Project
    template_name = 'home.html'
    
def contact_view(request):
    return render(request, 'contact.html', {})

class ProjectView(DetailView):
    model = Project
    template_name = 'project_detail.html'

    def get_object(self, **kwargs):
        return Project.objects.get(slugified_name=self.kwargs['slugified_name'])

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        with open(self.object.detail_source.path) as f:
            content = ''
            for line in f:
                content += line + '\n'
            context['body'] = content
        return context
