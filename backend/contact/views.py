from django.shortcuts import render
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .serializers import ContactSerializer
from .models import Contact

from django.core.mail import send_mail

from django.conf import settings

class ContactViewSet(mixins.CreateModelMixin, GenericViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
    def create(self, request, *args, **kwargs):
        try:
            send_mail(
            "PORTFOLIO MESSAGE!!",
            f"The message was from (Name): {request.data.get("name", "unknown")}, and the email {request.data.get('email', 'unknown')}\nThe Title is: {request.data.get('title', 'unknown')}\n\nAnd the body is below\n\n{request.data.get('body', 'unknown')}",
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_TO_SEND],
        )
        except:
            pass
        return super().create(request, *args, **kwargs)
