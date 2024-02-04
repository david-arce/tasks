from rest_framework import serializers
from .models import Task

#convertir tipos de datos de python a json
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = ('id', 'title', 'description', 'completed')
        fields = '__all__'
        model = Task