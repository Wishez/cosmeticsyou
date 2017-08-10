# -*- encoding: utf-8 -*-
from django import forms

from .models import Callback


class CallbackForm(forms.ModelForm):
    class Meta:
        model = Callback
        fields = ('callback_name', 'callback_phone', 'callback_message',)
        widgets = {
            'callback_name': forms.TextInput(attrs={
                'class': 'callbackForm__input',
                # 'pattern': '([А-Я]|[A-Z])([а-я]+|[a-z]+)(([-\s])([А-Я]|[A-Z])?([а-я]+|[a-z]+))?'
            }),
            'callback_phone': forms.TextInput(attrs={
                'class': 'callbackForm__input',
                'type': 'tel'
            }),
            'callback_message': forms.Textarea(attrs={
                'class': 'callbackForm__textarea',
                'rows': '3'
            }),
        }
