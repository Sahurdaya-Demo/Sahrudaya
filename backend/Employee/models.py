from django.db import models
class employee(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    email=models.CharField(max_length=100,default='xyz@gmail.com')
    name=models.CharField(max_length=100)
    age=models.CharField(max_length=10)
    qualification=models.CharField(max_length=255)
    phone=models.CharField(max_length=20,unique=True)
