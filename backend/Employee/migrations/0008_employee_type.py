# Generated by Django 5.0.1 on 2024-02-28 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0007_alter_employee_age_alter_employee_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='type',
            field=models.CharField(default='counsellor', max_length=15),
        ),
    ]
