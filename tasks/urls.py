from django.urls import include, path
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

#esto genera todas las rutas de la api
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Tasks API"))
    
]
