# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-26 19:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20171226_2030'),
    ]

    operations = [
        migrations.AddField(
            model_name='registrationpage',
            name='message',
            field=models.CharField(blank=True, default='Панель администрирования пополнилась новым консультаном!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Гарри</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Поттер Эванс Верес</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Гарри Поттер Эванс Верес</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=1000, null=True, verbose_name='Опциональное сообщение'),
        ),
        migrations.AddField(
            model_name='registrationpage',
            name='phone_from',
            field=models.CharField(blank=True, default='+79651581481', max_length=20, null=True, verbose_name='Телефон для отправления сообщений'),
        ),
        migrations.AddField(
            model_name='registrationpage',
            name='phones_to',
            field=models.TextField(blank=True, default='+79651581481', help_text='Указывайте телефоны через запятую +7000999222,+7222111333', max_length=1000, null=True, verbose_name='Телефоны для отправления сообщений'),
        ),
    ]