# -*- encoding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class UserBase(models.Model):
    last_name = models.CharField(_('Фамилия'), max_length=36)
    first_name = models.CharField(_('Имя'), max_length=32)
    consultant_num = models.CharField(_('Номер консультанта'), max_length=40, blank=True, null=True)

    url_to_personal_room = models.URLField(
        _('Ссылка в личный кабинет'),
        max_length=150,
        blank=True,
        null=True
    )
    register_statuses = (
        (_('Новый'), 'Новый'),
        (_('Зарегистрированный'), 'Зарегистрированный'),
        (_('Пустой'), 'Пустой'),
    )

    status = models.CharField(
        _('Статус регистрации'),
        max_length=18,
        choices=register_statuses,
        default='Новый'
    )
    refferal_url =  models.URLField(
        _('Реферальная ссылка'),
        max_length=150,
        blank=True,
        null=True
    )


    registered_date = models.DateTimeField(blank=True, null=True)
    class Meta:
        abstract = True
        ordering = ['-registered_date']

    def register(self):
        self.registered_date = timezone.now()
        self.save()