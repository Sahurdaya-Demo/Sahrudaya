# Generated by Django 5.0.1 on 2024-03-10 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consellor', '0006_counsellor_nameofcounsellor_alter_counsellor_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='counsellor',
            name='school',
            field=models.CharField(blank=True, default='null', max_length=15, null=True),
        ),
    ]