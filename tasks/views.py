from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.

#datos que van a ser consultados
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()