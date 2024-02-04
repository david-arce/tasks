from django.urls import include, path
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

#esto genera todas las rutas de la api(get, post, put, delete)
urlpatterns = [
    path("api/v1/", include(router.urls))
    
]
