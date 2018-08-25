from django.conf.urls import url
from accounts.api.views import *
from shares.api.views import *
from .views import *

urlpatterns = [
    url(r'news/$', NewsListView.as_view(), name="news"),
    url(r'news/(?P<slug>[\w\-]+)/$', NewsView.as_view(), name="single_news"),
    url(r'consultant/(?P<consultant_number>[\d]+)/$', get_consultant_by_consultant_number, name="consultant"),
]