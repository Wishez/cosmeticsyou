# -*- coding: utf-8 -*-
from django.conf.urls import  url

from . import views

urlpatterns = [
    url(r'^$', views.register, name='registr'),
    url(r'^success/$', views.success, name='success'),
    url(r'^[0-1a-zA-Z]*/$', views.success, name='success')
]
