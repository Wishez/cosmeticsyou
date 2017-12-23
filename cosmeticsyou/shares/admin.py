# -*- coding: utf-8 -*-
from myadmin.admin import admin_site

from .models import Share

# Register your models here.

admin_site.register(Share)