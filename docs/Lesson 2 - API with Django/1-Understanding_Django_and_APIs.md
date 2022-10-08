# Creating django projects

```
pip install virtualenv
virtualenv -p "python\Directory\python.exe" venvName
.\venvName\Scripts\activate
pip install django
django-admin startproject myteacher .
python .\manage.py runserver
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -> activating scripts in WINDOWS TERMINAL
```

# Language and timezone configs
- In settings.py we change:
```py
   ... 
    LANGUAGE_CODE = 'pt-br'

    TIME_ZONE = 'America/Sao_Paulo'
    ...
```

## Creating apps and config them
An app is a part of the project, as a module from a software. Example: API to handle spotify data, frontend to show the infos, etc.
```
    python .\manage.py startapp appName
```

- Archives explanation:
```
    |---projectFolder
        |---settings.py -> Make all configs in the project, as installed apps, languages, timezone
        |---urls.py -> Handle all urls used in our project by the apps
        |---wsgi.py ->  WSGI is a python pattern to the web applications to communicate with other services. Used in asynchronous applications
        |---asgi.py -> ASGI is similarly as the WSGI, but used in synchronous applications
        |---__init__.py -> File to say that the app folder is a importable folder
        |---app
            |---admin.py -> File to the admin panel 
            |---apps.py -> Config file to the app
            |---models.py -> File to handle all models in the app
            |---test.py -> File to handle the automatized tests in the app
            |---views.py -> Where is handle all views in the application
            |---migrations -> Folder that have all database migrations
```

- We need to add the app in our project, so in the settings.py
```py
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'app.apps.AppConfig'
    ]
```

## Creating a route
We need to add a folder to the html templates. So we create appName/templates/app/home.html
```html
    <h1>Hello world</h1>
```

- Now we create a view to render this html file. So in appName/views.py
```py
    from django.shortcuts import render

    # Create your views here.
    def home(request):
        return render(request=request, "app/home.html")
```
- And we need to add the route in our project. So in projectFolder/urls.py
```py
    
    from django.contrib import admin
    from django.urls import path

    from backend.app.views import home

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('test', home)
    ]

```

## Web App in Model-Template-View (MTV) scheme
- Client -> Request (GET, POST, PATCH, DELETE) -> Url Dispatcher (urls.py) -> View -> Client

- Internally view: View -> Template or View -> Model -> Database

## API scheme
- Client -> Request (GET, POST, PATCH, DELETE) -> API -> Response (with json data and status code) -> Client

## Using Rest_framework
We will use the rest_framework to help us to create the API
```
    pip install djangorestframework
```
- And we need to add in settings.py
```py
    
INSTALLED_APPS = [
    ...
    'app.apps.AppConfig',
    'rest_framework'
]
```

## Creating a view with Rest_framework
- In views.py
```py
    from rest_framework.response import Response
    from rest_framework.views import APIView
    from rest_framework import status

    # Create your views here.
    class HomeApiView(APIView):
        def get(self, request, format=None):
            return Response({"Message": "Hello"}, status= status.HTTP_200_OK)
```
- In projectFolder/urls.py
```py
    from app.views import HomeApiView

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('test', HomeApiView.as_view())
    ]
```

- If some error has given in "django_session" Run this code:
```
    python .\manage.py makemigrations
    python .\manage.py migrate
```