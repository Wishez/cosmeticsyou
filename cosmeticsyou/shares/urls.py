from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.share_list, name='share_list'),
    url(r'^share/(?P<pk>[0-9]+)/$', views.share_detail, name='share_detail'),
]

