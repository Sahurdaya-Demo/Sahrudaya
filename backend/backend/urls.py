from django.contrib import admin
from django.urls import path, include
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView,UserLogout
from django.conf import settings
from Employee.views import EmpView,ValidPost,ValidGet
from django.conf.urls.static import static
from rest_framework import routers
route=routers.DefaultRouter()
route.register("",EmpView,basename='Employee')
# route2=routers.DefaultRouter()
# route2.register("",ValidView,basename='Employee')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(route.urls)),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('validpost',ValidPost.as_view(),name='validpost'),
    path('validget',ValidGet.as_view(),name='validget')
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
