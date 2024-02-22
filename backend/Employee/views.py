from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status,permissions
from rest_framework import viewsets
from .models import employee,ValidLink
from rest_framework.views import APIView
from .serializers import EmpSerializer,ValidSerializer
class EmpView(viewsets.ModelViewSet):
    queryset = employee.objects.all()
    serializer_class = EmpSerializer
class ValidPost(APIView):
     def post(self, request, format=None):
          serialized = ValidSerializer(data=request.data)
          serialized.is_valid(raise_exception=True)
          serialized.save()
          return Response({'msg':'added'}, status=status.HTTP_201_CREATED)
    #  def get(self, request, format=None):
    #     #   validity=ValidLink.objects.get(secure_str=request.data.get('secure_str'))
    #       return Response({'msg':validity}, status=status.HTTP_201_CREATED)
class ValidGet(APIView):
     def post(self, request, format=None):
          # try:
          #  serialized = ValidSerializer(data=request.data)
          #  return Response({'msg':'link valid'}, status=status.HTTP_201_CREATED)
          # except:
          #   return Response({'errors':'link invalid'}, status=status.HTTP_200_OK)  
          serialized = ValidSerializer(data=request.data)
          serialized.is_valid(raise_exception=True)
          if ValidLink.objects.filter(secure_str=serialized.data.get('secure_str')).exists():
               return Response({'errors':'link invalid'}, status=status.HTTP_200_OK)  
          else:
               return Response({'msg':'link valid'}, status=status.HTTP_201_CREATED)

