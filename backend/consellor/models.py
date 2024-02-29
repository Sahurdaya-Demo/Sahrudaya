from django.db import models
class counsellor(models.Model):
    
    date=models.DateField()
    place_of_counselling = models.CharField(max_length=50  )
    name = models.CharField(max_length=100)
    email=models.CharField(max_length=30,default='null')
    age =  models.CharField(max_length=10)
    gender = models.CharField(max_length=10)
    finacial_status = models.CharField(max_length=10)
    marital_status = models.CharField(max_length=10)
    school=  models.CharField(max_length=15)
    religion= models.CharField(max_length=20,default='null',null=True)
    fathers_occupation= models.CharField(max_length=25,default='null',null=True)
    mothers_occupation= models.CharField(max_length=25,default='null',null=True)
    fathers_education=models.CharField(max_length=25,default='null',null=True)
    mothers_education=models.CharField(max_length=25,default='null',null=True)
    problem=models.CharField(max_length=200)
    history_of_problem=models.CharField(max_length=500,default='null',null=True)
    intervention=models.CharField(max_length=100,default='null',null=True)
    challenges_by_counsellor=models.CharField(max_length=200,default='null',null=True)
    number_of_followup_sections=models.CharField(max_length=10,)
    referral_service=models.CharField(max_length=100,default='null',null=True)
    outcome=models.CharField(max_length=250,default='null',null=True)
    remarks=models.CharField(max_length=200,default='null',null=True)
    status=models.CharField(max_length=10)





