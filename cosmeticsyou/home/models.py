# -*- encoding: utf-8 -*-

import sys
from django.conf import settings

if getattr(settings, 'IS_PRODUCTION', False):
    reload(sys)
    sys.setdefaultencoding('utf-8')

from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.db.models.signals import pre_save
from .help_parts import variables_text_1, variables_text_2


class Callback(models.Model):
    callback_name = models.CharField(_('ФИО'), max_length=160)
    callback_phone = models.CharField(_('Телефон'), max_length=30)
    callback_message = models.TextField(_('Комментарий'), max_length=250, null=True, blank=True)

    choices = (
        (_('Новый'), 'Новый'),
        (_('Проконсультированный'), 'Проконсультированный'),
    )
    status = models.CharField(
        _('Статус обратного вызова'),
        choices=choices,
        max_length=20,
        default=_('Новый')
    )
    called_at = models.DateTimeField(
        _('Дата заказа обратного вызова'),
        default=timezone.now
    )

    def __str__(self):
        return self.callback_name + '|' + self.callback_phone

    class Meta:
        verbose_name = _('Обратный вызов')
        verbose_name_plural = _('Обратные вызовы')


class EmailMessagesSetting(models.Model):
    is_allow_sending_messages = models.BooleanField(_('Использовать информирование на почту?'), default=True)

    change_registration_status_subject= models.CharField(
        _('Тема'),
        help_text=_(
            variables_text_2
        ),
        max_length=200,
        default='Изменили статус регистрации'
    )
    registered_a = models.TextField(
        _('Сообщение для Зарегистрированного А'),
        max_length=6000,
        help_text=_(
            variables_text_2
        ),
        default=_('Ваш текущий статус регистрации　ー　"Зарегистрированный А".')
    )
    registered_b = models.TextField(
        _('Сообщение для Зарегистрированного Б'),
        max_length=6000,
        help_text=_(
            variables_text_2
        ),
        default=_('Ваш текущий статус регистрации　ー　"Зарегистрированный Б".')
    )
    set_number_consultant_subject = models.CharField(
        _('Новый номер(Тема)'),#сообщения для смены статуса консультанта.
        max_length=200,
        default=_('У вас есть собственный номер консультанта!'),
        help_text=_(
            variables_text_1
        ),
    )
    set_number_consultant_message = models.TextField(
        _('Новый номер(Сообщение)'),#Сообщение для консультната при установке номера консультанату
        max_length=6000,
        help_text=_(
            variables_text_1
        ),
        default=_('{{first_name}}, мы присвоили вам уникальный номер консультанта ー {{consultant_num}}! '
                'Через него вы можете заходить в свою персональную комнату ー {{url_to_personal_room}}.'
                ''
                'С уважением, Администрация!')
    )
    after_register_subject = models.CharField(
        _('Тема'),
        max_length=200,
        help_text=_(
            variables_text_2
        ),
        default=_('Почти зарегистрированы на сайте {{site}}!')

    )
    after_register_message = models.TextField(
        _('Сообщение'),#_('Сообщение на почту для новоприбывшего консультанта'),
        max_length=6000,
        help_text=_(
            variables_text_2
        ),
        default=_('Приветствую, {{fist_name}}!'
                  'Вы зарегистрировались на нашем сайте. Скоро ваша заявка будет обра-'
                  'ботана и вам будет присвоен новый статус регистрации, вместе с уни-'
                  'кальным идентификатором. '
                  'Всю эту информацию мы пришлём на ваш email ー от вас требуется только '
                  'ожидание! '
                  ''
                  'С наилучшими пожеланиями, Администрация.')
    )
    change_number_consultant_subject = models.CharField(
        _('Изменение номера(Тема)'),
        max_length=200,
        help_text=_(
            variables_text_1
        ),
        default=_('Ваш уникальный номер был изменён!')

    )


    change_number_consultant_message = models.TextField(
        _('Изменённый номер(Соббщение)'),#Сообщение для консультанта при смене номера консультаната
        max_length=6000,
        help_text=_(
            variables_text_1
        ),
        default=_('{{first_name}}, вам следует знать, что мы обновили ваш номер консультанта ー {{consultant_num}}. '
                  'Поскольку номер консультанта изменён, также изменился адрес в вашу персональную комнату ー　{{url_to_personal_room}}.'
                  ''
                  'С уважением, Администрация!')
    )

    statuses = (
        (_('Не активная группа'), 'Не активна группа'),
        (_('Активная группа'), 'Активная группа'),
    )
    is_active = models.CharField(
        _('Активация'),
        default=_('Не активная группа'),
        choices=statuses,
        max_length=20,
    )
    def __unicode__(self):
        return _('Настройка отправляемых сообщений')
    def __str__(self):
        return str(_('Настройка отправляемых сообщений'))
    class Meta:
        verbose_name = _('Email сообщение')
        verbose_name_plural = _('Email сообщения')



def switch_active_custom(sender, instance, **kwargs):

     if instance.is_active == _('Активная группа'):
         customs = sender.objects.all()
         if len(customs):
             for custom in customs:
                 custom.is_active = _('Не активная группа')
                 custom.save()
         instance.is_active = _('Активная группа')

pre_save.connect(switch_active_custom, sender=EmailMessagesSetting)