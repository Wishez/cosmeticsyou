from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register_callback/', views.register_callback, name='register_callback'),
]
