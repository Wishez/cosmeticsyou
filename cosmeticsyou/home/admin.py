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

admin.site.register(Program)
admin.site.register(Slider)
admin.site.register(Callback, CallbackAdmin)
