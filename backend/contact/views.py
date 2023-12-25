from django.shortcuts import render
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .serializers import ContactSerializer
from .models import Contact

class ContactViewSet(mixins.CreateModelMixin, GenericViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
