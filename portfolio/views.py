from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Project
# from django.templatetags.static import static
from django.conf import settings
from django.http import HttpResponse
import os

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

def resume_view(request):
    with open(os.path.join(settings.STATIC_ROOT, 'portfolio/resume.pdf'), 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=resume.pdf'
        return response
    pdf.closed
