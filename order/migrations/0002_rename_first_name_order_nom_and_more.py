# Generated by Django 4.1.5 on 2023-01-17 23:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='first_name',
            new_name='nom',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='last_name',
            new_name='prenom',
        ),
    ]
