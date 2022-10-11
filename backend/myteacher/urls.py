
from django.contrib import admin
from django.urls import path

from app.views import HomeApiView
from teacher.views import GetTeachersView, CreateClassView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('teachers/', GetTeachersView.as_view()),
    path('teachers/<int:id>/classes', CreateClassView.as_view()),
]
