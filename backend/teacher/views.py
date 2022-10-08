from distutils import errors
from teacher.models import Classes
from teacher.serializers.classes import ClassSerializer
from teacher.serializers.classes import CreateClassSerializer
from teacher.serializers.teacher import TeacherSerializer
from django.shortcuts import render
from rest_framework.views import APIView, Response
from django.shortcuts import get_object_or_404
from rest_framework import status

from teacher.models import Teacher

# Create your views here.
class GetTeachersView(APIView):

    def get(self, request, format=None):
        teachers = Teacher.objects.all()

        serializer_class = TeacherSerializer(teachers,many=True)
        return Response(serializer_class.data, status=status.HTTP_200_OK)


class CreateClassView(APIView):

    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = CreateClassSerializer(data=request.data)

        if serializer.is_valid():

            new_class = Classes(
                name=serializer.validated_data.get('name'),
                email=serializer.validated_data.get('email'),
                teacher = teacher
            )

            new_class.save()

            new_class_serializer = ClassSerializer(new_class, many=False)
        
            return Response(new_class_serializer.data, status=status.HTTP_201_CREATED)

        return Response(
            {"message": "Some errors occurred", 
            "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )