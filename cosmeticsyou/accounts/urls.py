# -*- coding: utf-8 -*-
from django.conf.urls import  url

from . import views
urlpatterns = [
    url(r'^$', views.RegistrationView.as_view(), name='registr'),
    url(r'^success/$', views.success, name='success'),
    url(r'^(?P<consultant_num>[0-9]+)/$', views.RefferalRegistrationView.as_view(), name='refferal_register'),
    url(r'^room_(?P<consultant_num>[0-9]+)/$', views.personal_room, name='personal_room'),
]

