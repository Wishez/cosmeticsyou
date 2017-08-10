# -*- encoding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
# Create your models here.


class User(models.Model):

    last_name = models.CharField(verbose_name='Фамилия', max_length=36)
    first_name = models.CharField(verbose_name='Имя', max_length=32)
    middle_name = models.CharField(verbose_name='Отчество', max_length=32, blank=True, null=True)
    empty_middle_name = models.BooleanField(default=False ,verbose_name='Нет отчества.')

    birthday = models.DateTimeField(verbose_name='День рождения')
    citizenship = models.BooleanField(default=False, verbose_name='Не гражданин РФ.')
    passport_data = models.CharField(max_length=26, verbose_name='Серия и номер паспорта')
    phone_number = models.CharField(max_length=26, verbose_name='Номер телефона')

    city = models.CharField(verbose_name='Город', max_length=50)
    region = models.CharField(verbose_name='Область', max_length=50, blank=True, null=True)

    street = models.CharField(verbose_name='Улица', max_length=50)
    num_home = models.CharField(verbose_name='Дом' , max_length=5)
    num_apartment = models.DecimalField(verbose_name='Квартира', max_digits=999, decimal_places=1)

    email = models.EmailField(unique=True, verbose_name='E-mail')

    consultant_num = models.CharField(verbose_name='Номер консультанта', max_length=40, blank=True, null=True)

    register_statuses = (
        (_('Новый'), 'Новый'),
        (_('Зарегистрированный'), 'Зарегистрированный'),
        (_('Пустой'), 'Пустой'),
    )

    status = models.CharField(
        max_length=18,
        choices=register_statuses,
        default='Новый',
        verbose_name='Статус регистрации'
    )

    registered_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = _('Консультант')
        verbose_name_plural = _('Консультанты')
        ordering = ['-registered_date']

    def registr(self):
        self.registered_date = timezone.now()
        self.save()

    def __str__(self):
        return self.last_name + "\t" + self.first_name + "\t" + self.middle_name +\
               '\t|\t\tСтатус:\t' + self.status