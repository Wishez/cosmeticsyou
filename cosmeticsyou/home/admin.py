# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import *
# Register your models here.

class CallbackAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('callback_name', 'callback_phone','status', 'called_at',)
    filter_fields = ('callback_name', 'status', 'called_at',)
    search_fields = (
        'callback_name', 'callback_phone', 'status', 'called_at',
    )
class EmailAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('registered_a', 'registered_b','is_active',)
    search_fields = (
        'registered_a', 'registered_b','is_active',
    )
admin.site.register(Program)
admin.site.register(Slider)
admin.site.register(EmailMessage, EmailAdmin)
admin.site.register(Callback, CallbackAdmin)
