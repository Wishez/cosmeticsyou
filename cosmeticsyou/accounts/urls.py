# -*- coding: utf-8 -*-
from django.conf.urls import  url

from . import views

urlpatterns = [
    url(r'^$', views.RegistrationView.as_view(), name='registr'),
    url(r'^(?P<consultant_id>[0-1a-zA-Z]+)/$', views.RefferalRegistrationView.as_view(), name='refferal_register'),
    url(r'^room_(?P<consultant_id>[0-1a-zA-Z]+)/$', views.success, name='personal_room'),
    url(r'^success/$', views.success, name='success'),
]
