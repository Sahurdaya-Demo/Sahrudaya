from rest_framework.response import Response
from rest_framework import status,permissions
from rest_framework.views import APIView
from account.serializers import SendPasswordResetEmailSerializer, UserChangePasswordSerializer, UserLoginSerializer, UserPasswordResetSerializer, UserProfileSerializer, UserRegistrationSerializer
from django.contrib.auth import authenticate,logout
# from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .models import User
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework_simplejwt.token_blacklist.models import \
# OutstandingToken, BlacklistedToken
from Employee.serializers import EmpSerializer
# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
  # renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serialized = EmpSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serialized.is_valid(raise_exception=True)
    user = serializer.save()
    serialized.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  # renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    if User.objects.filter(email=serializer.data.get('email')).exists():
     email = serializer.data.get('email')
     password = serializer.data.get('password')
     type = User.objects.get(email=email)
     user = authenticate(email=email, password=password)
     if user is not None:
       token = get_tokens_for_user(user)
       return Response({'token':token,'type':str(type.type), 'msg':'Login Success'}, status=status.HTTP_200_OK)
     else:
       return Response({'errors':{'non_field_errors':['Password is not Valid']}}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email does not exist']}}, status=status.HTTP_200_OK)

class UserProfileView(APIView):
  # renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
class UserLogout(APIView):
   authentication_classes = ()
  #  permission_classes = [IsAuthenticated]
   def post(self, request):
      try:
        # print(request.data['refresh'])
        refresh_token = request.data['refresh']
        # OutstandingToken.objects.filter(token=refresh_token).delete()
        # RefreshToken(refresh_token).blacklist()
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
      except KeyError:
        return Response({'error': 'refresh_token key not found'}, status=status.HTTP_400_BAD_REQUEST)
        
class UserChangePasswordView(APIView):
  # renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  # renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    try:
      serializer = SendPasswordResetEmailSerializer(data=request.data)
      print(request.data)
      serializer.is_valid(raise_exception=True)
      return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)
    except:
      return Response({'errors': 'email not found'}, status=status.HTTP_200_OK)
class UserPasswordResetView(APIView):
  # renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    try:
      serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
      serializer.is_valid(raise_exception=True)
      return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)
    except:
      return Response({'errors': 'Pass and crpwd not match'}, status=status.HTTP_400_BAD_REQUEST)


