# Generated by Django 4.2.2 on 2024-02-23 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employee', '0003_remove_employee_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/images'),
        ),
    ]
