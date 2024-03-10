# Generated by Django 5.0.1 on 2024-03-10 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consellor', '0007_alter_counsellor_school'),
    ]

    operations = [
        migrations.AlterField(
            model_name='counsellor',
            name='challenges_by_counsellor',
            field=models.CharField(blank=True, default='null', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='fathers_education',
            field=models.CharField(blank=True, default='null', max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='fathers_occupation',
            field=models.CharField(blank=True, default='null', max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='history_of_problem',
            field=models.CharField(blank=True, default='null', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='intervention',
            field=models.CharField(blank=True, default='null', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='mothers_education',
            field=models.CharField(blank=True, default='null', max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='mothers_occupation',
            field=models.CharField(blank=True, default='null', max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='outcome',
            field=models.CharField(blank=True, default='null', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='referral_service',
            field=models.CharField(blank=True, default='null', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='religion',
            field=models.CharField(blank=True, default='null', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='counsellor',
            name='remarks',
            field=models.CharField(blank=True, default='null', max_length=200, null=True),
        ),
    ]
