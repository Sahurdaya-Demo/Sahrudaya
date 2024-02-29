from django.shortcuts import render
from rest_framework import viewsets
from .models import counsellor
from .serializers import CounsellorSerializer
# Creatclasse your views here.

class submitview(viewsets.ModelViewSet):
 queryset= counsellor.objects.all()
 serializer_class = CounsellorSerializer