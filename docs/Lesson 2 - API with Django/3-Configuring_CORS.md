# What is CORS and what we need to config
CORS is a security block that the browser makes when two apps in different servers are trying to communicate on each other
In our API, we need to make the connection with other server, in that case, with the frontend
We will use a library to make this automatically

```
pip install django-cors-headers
```
- Putting in settings.py
```py
    INSTALLED_APPS = [
        ...
        'rest_framework',
        'teacher.apps.TeacherConfig',
        'corsheaders'
    ]

...
    MIDDLEWARE = [
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        # Need to be before the common.CommonMiddleware
        'corsheaders.middleware.CorsMiddleware'
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]
```
- We need to create a variable to say which origins will be enable to connect with or api. In the final of settings.py
```py
    CORS_ALLOW_ALL_ORIGIN = True
```