from django.db import models
from Employee.imgserialzer import Base64ImageField
class employee(models.Model):
    # image = Base64ImageField(max_length=None, use_url=True)
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    email=models.CharField(max_length=100,default='xyz@gmail.com')
    name=models.CharField(max_length=100)
    age=models.CharField(max_length=10)
    qualification=models.CharField(max_length=255)
    phone=models.CharField(max_length=20,unique=True)
class ValidLink(models.Model):
    secure_str=models.CharField(max_length=50)
