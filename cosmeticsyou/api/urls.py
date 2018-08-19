from django.conf.urls import url
from accounts.api.views import *
from shares.api.views import *

urlpatterns = [
    url(r'news/$', NewsListView.as_view(), name="news"),
    url(r'news/(?P<slug>[\w\-]+)/$', NewsView.as_view(), name="single_news"),

]