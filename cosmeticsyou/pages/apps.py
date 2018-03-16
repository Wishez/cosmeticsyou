# -*- coding: utf-8 -*-
from django.apps import AppConfig
from django.utils.translation import u_gettext_lazy as _

class PagesConfig(AppConfig):
    verbose_name = _('Страницы')
    name = 'pages'
