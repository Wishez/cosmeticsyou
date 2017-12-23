from django.contrib.admin import AdminSite
from django.contrib.sites.models import Site
from django.contrib.auth.models import User, Group
# from .models import MyModel

class MyAdminSite(AdminSite):
    site_header = 'Cosmeticsyou'
    site_title = 'Песочница Cosmeticsyou'
    index_title = 'Панель администрирования'

admin_site = MyAdminSite(name='admin')
admin_site.register(Site)
admin_site.register(User)
admin_site.register(Group)