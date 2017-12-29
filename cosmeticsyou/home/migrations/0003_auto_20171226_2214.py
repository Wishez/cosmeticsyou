# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-26 19:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20171223_1647'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='after_register_message',
            field=models.TextField(default='Приветствую, {{fist_name}}!Вы зарегистрировались на нашем сайте. Скоро ваша заявка будет обра-ботана и вам будет присвоен новый статус регистрации, вместе с уни-кальным идентификатором. Всю эту информацию мы пришлём на ваш email ー от вас требуется только ожидание! С наилучшими пожеланиями, Администрация.', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='after_register_subject',
            field=models.CharField(default='Почти зарегистрированы на сайте {{site}}!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=200, verbose_name='Тема'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='change_number_consultant_message',
            field=models.TextField(default='{{first_name}}, вам следует знать, что мы обновили ваш номер консультанта ー {{consultant_num}}. Поскольку номер консультанта изменён, также изменился адрес в вашу персональную комнату ー\u3000{{url_to_personal_room}}.С уважением, Администрация!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=6000, verbose_name='Изменённый номер(Соббщение)'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='change_number_consultant_subject',
            field=models.CharField(default='Ваш уникальный номер был изменён!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=200, verbose_name='Изменение номера(Тема)'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='change_registration_status_subject',
            field=models.CharField(default='Изменили статус регистрации', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=200, verbose_name='Тема'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='registered_a',
            field=models.TextField(default='Ваш текущий статус регистрации\u3000ー\u3000"Зарегистрированный А".', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение для Зарегистрированного А'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='registered_b',
            field=models.TextField(default='Ваш текущий статус регистрации\u3000ー\u3000"Зарегистрированный Б".', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение для Зарегистрированного Б'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='set_number_consultant_message',
            field=models.TextField(default='{{first_name}}, мы присвоили вам уникальный номер консультанта ー {{consultant_num}}! Через него вы можете заходить в свою персональную комнату ー {{url_to_personal_room}}.С уважением, Администрация!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=6000, verbose_name='Новый номер(Сообщение)'),
        ),
        migrations.AlterField(
            model_name='emailmessagessetting',
            name='set_number_consultant_subject',
            field=models.CharField(default='У вас есть собственный номер консультанта!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=200, verbose_name='Новый номер(Тема)'),
        ),
    ]
