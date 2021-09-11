from django.conf.urls.static import static
from django.contrib.staticfiles.views import serve
from django.views.decorators.cache import cache_control
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView 
from django.contrib import admin
from django.urls import re_path, path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    re_path('^(?!((api)|(admin)))', TemplateView.as_view(template_name='index.html')), # only send urls that dont begin with 'api' to React
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, view=cache_control(no_cache=True, must_revalidate=True)(serve))
