# -*- encoding: utf-8 -*-
from django import forms

from .models import Consultant
# Create your models here.

class RegistrForm(forms.ModelForm):
    user_led = forms.CharField(widget=forms.HiddenInput, label='')
    user_led_1 = forms.CharField(widget=forms.HiddenInput, label='')
    user_led_2 = forms.CharField(widget=forms.HiddenInput, label='')

    class Meta:
        model = Consultant
        fields = ('last_name', 'first_name', 'middle_name',
                  'empty_middle_name', 'birthday',
                  'citizenship', 'passport_data', 'phone_number',
                  'city', 'region', 'street', 'num_home',
                  'num_apartment', 'email', 'user_led', 'user_led_1', 'user_led_2',)
        widgets = {
            'last_name': forms.TextInput(attrs={
                    'placeholder': 'Фамилия',
                    'pattern': '\D+',
                    'autofocus': 'true'
            }),
            'first_name': forms.TextInput(attrs={
                'placeholder': 'Имя',
                'pattern': '([А-Я]|[A-Z])([а-я]+|[a-z]+)(([-\s])([А-Я]|[A-Z])?([а-я]+|[a-z]+))?'
            }),
            'middle_name': forms.TextInput(attrs={
                'placeholder': 'Отчество',
                'pattern': '([А-Я]|[A-Z])([а-я]+|[a-z]+)'
            }),
            'birthday': forms.DateInput(attrs={
                'placeholder': 'День рождения',
                'type': 'date'
            }),
            'passport_data': forms.TextInput(attrs={
                'placeholder': 'Серия и номер паспорта'
            }),
            'phone_number': forms.TextInput(attrs={
                'placeholder': 'Номер телефона',
				'type': 'tel'
            }),
            'city': forms.TextInput(attrs={
                'placeholder': 'Город',
                'pattern': '\D+'
            }),
            'region': forms.TextInput(attrs={
                'placeholder': 'Область',
                'pattern': '\D+'
            }),
            'street': forms.TextInput(attrs={
                'placeholder': 'Улица',
                'pattern': '\D+'
            }),
            'num_home': forms.TextInput(attrs={
                'placeholder': 'Дом'
            }),
            'num_apartment': forms.NumberInput(attrs={
                'placeholder': 'Квартира',
                'max': 999,
                'min': 1,
                'value': 1,
                'step': 1
            }),
            'email': forms.EmailInput(attrs={'placeholder': 'E-mail'})
        }
