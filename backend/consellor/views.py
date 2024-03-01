from django.shortcuts import render
from rest_framework import viewsets
from .models import counsellor
from .serializers import CounsellorSerializer
from rest_framework.response import Response
# Creatclasse your views here.

class submitview(viewsets.ModelViewSet):
 queryset= counsellor.objects.all()
 serializer_class = CounsellorSerializer
 def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)