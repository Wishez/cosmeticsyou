# -*- encoding: utf-8 -*-
from django import forms

from .models import User, RefferalConsultant
# Create your models here.
class BaseRegistrationForm(forms.ModelForm):
    class Meta:
        # 'passport_data',
        # 'street', 'num_home',
        # 'num_apartment',
        fields = ('last_name', 'first_name', 'middle_name',
                  'empty_middle_name', 'birthday', 'email', 'phone_number',
                  'city', 'region', )
        widgets = {
            'last_name': forms.TextInput(attrs={
                'placeholder': 'Иванов',
                'pattern': '\D+',
                'autofocus': 'true',
                'autocomplete': 'cc-family-name'
            }),
            'first_name': forms.TextInput(attrs={
                'placeholder': 'Иван',
                'pattern': '([А-Я]|[A-Z])([а-я]+|[a-z]+)(([-\s])([А-Я]|[A-Z])?([а-я]+|[a-z]+))?',
                'autocomplete': 'cc-given-name'
            }),
            'middle_name': forms.TextInput(attrs={
                'placeholder': 'Иванович',
                'pattern': '([А-Я]|[A-Z])([а-я]+|[a-z]+)',
                'autocomplete': 'cc-additional-name'
            }),
            'birthday': forms.DateInput(attrs={
                'placeholder': '31.12.1990',
                'type': 'date',
                'autocomplete': 'bday'
            }),
            # 'passport_data': forms.TextInput(attrs={
            #     'placeholder': '0000 - 000000'
            # }),
            'phone_number': forms.TextInput(attrs={
                'placeholder': '+7 (555) 555-35-55',
                'type': 'tel',
                'autocomplete': 'tel-national'
            }),
            'city': forms.TextInput(attrs={
                'placeholder': 'Москва, Стамбул, Лондон',
                'pattern': '\D+',
                'autocomplete': 'country-name'

            }),
            'region': forms.TextInput(attrs={
                'placeholder': '1239876',
                'pattern': '\d+',
                'autocomplete': 'postal-code'
            }),
            # 'street': forms.TextInput(attrs={
            #     'placeholder': 'Тисовая, Пушкино, Бейкер-стрит',
            #     'pattern': '\D+'
            # }),
            # 'num_home': forms.TextInput(attrs={
            #     'placeholder': '10а, 11, 12Б'
            # }),
            # 'num_apartment': forms.NumberInput(attrs={
            #     'placeholder': '1',
            #     'max': 999,
            #     'min': 1,
            #     'value': 1,
            #     'step': 1
            # }),
            'email': forms.EmailInput(attrs={
                'placeholder': 'your_email@your_domain.ru',
                'autocomplete': 'email'

            })
        }

class RegistrationConsultantForm(BaseRegistrationForm):
    class Meta(BaseRegistrationForm.Meta):
        model = User


class RegistrationRefferalConsultantForm(forms.ModelForm):
    class Meta(BaseRegistrationForm.Meta):
        model = RefferalConsultant
