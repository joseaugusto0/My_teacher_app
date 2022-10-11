# MyTeacherApp - TreinaWeb Workshop
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Description
  The project MyTeacherApp consists in an application to list a bunch of teachers and book a class with them.
  This application was developed in a programming workshop proposed by [Rocketseat](https://www.treinaweb.com.br/) called Trilha Principal - TreinaWeb.


# Index

- [Installation and running](#instalation)
- [Backend Routes](#backend-routes)
- [Challenges Proposed](#challenges-proposed)
- [My Annotations](https://github.com/joseaugusto0/My_teacher_app/tree/main/docs)


## Installation and running
- Clone all the repository quoted in [My_teacher_app Repository](https://github.com/joseaugusto0/My_teacher_app)

- Open VS Code in *My_teacher_app/* folder

-   Create the virtualenv for the project proposed in this repository. Tutorial [here](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/)

-   Install the dependencies with requirements.txt. Set your environment, and install all dependencies that you need with this command:
```
    pip install -r .\backend\requirements.txt
```

-   Run the backend
```
    python .\backend\manage.py runserver
```

-   In other terminal, run the frontend
```
    npm run dev
``` 

## Backend Routes
My_teacher_app is composed basically by three routes in backend:

### 1 - backendUrl:8000/admin - GET
This route is a default view set by django to administrate all tables in our django project

### 2 - backendUrl:8000/teachers - GET
This route will return all teachers registered in the database.

### 3 - backendUrl:8000/teachers/<int:id>/classes - POST
This route will take two parameters
-   name - String
-   email - String

This route will create a new booking for the selected teacher in frontend

## Challenges Proposed
At the final of the workshop, was proposed some changes in the project, some challenges to all the devs who followed the classes. To make it more dinamic, I will put the challenges here as task list and updating according to my development
- [X] Put the project in a github repository
- [ ] Add a login page with JWT
- [ ] Put the project in a production (using tools like Heroku)
- [ ] Try differents DB's (like MongoDB, MariaDB, MySQL, and more)

### Created by: [José Augusto Coura](https://github.com/joseaugusto0)

