from django.core.mail import EmailMessage
import os

class Util:
  @staticmethod
  def send_email(data):
    email = EmailMessage(
      subject=data['subject'],
      body=data['body'],
      from_email=data['from_email'],
      to=[data['to_email']]
    )
    email.send()
# print(os.environ.get('EMAIL_USER'))