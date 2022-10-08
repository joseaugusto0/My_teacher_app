from rest_framework import serializers
from django.forms import ValidationError
from teacher.models import Classes

class CreateClassSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)
    
    def validate_name(self,value):
        if(len(value)<3):
            raise ValidationError("Must be three characters")
        return value

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = '__all__'