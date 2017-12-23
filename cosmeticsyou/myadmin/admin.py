from django.contrib.admin import AdminSite

# from .models import MyModel

class MyAdminSite(AdminSite):
    site_header = 'Cosmeticsyou'

admin_site = MyAdminSite(name='admin')
# admin_site.register(MyModel)