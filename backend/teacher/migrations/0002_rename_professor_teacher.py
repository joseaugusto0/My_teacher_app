# Generated by Django 4.1.2 on 2022-10-08 00:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Professor',
            new_name='Teacher',
        ),
    ]
