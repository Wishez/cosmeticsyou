# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-03-08 20:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marks', '0002_auto_20180308_2323'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mark',
            name='utm_campaign',
            field=models.CharField(default='', max_length=200, verbose_name='Название рекламной кампании'),
        ),
        migrations.AlterField(
            model_name='mark',
            name='utm_content',
            field=models.CharField(blank=True, default='', max_length=200, null=True, verbose_name='Дополнительная информация, которая помогает различать объявления;'),
        ),
        migrations.AlterField(
            model_name='mark',
            name='utm_medium',
            field=models.CharField(blank=True, default='', max_length=200, null=True, verbose_name='Тип трафика'),
        ),
        migrations.AlterField(
            model_name='mark',
            name='utm_source',
            field=models.CharField(default='', max_length=200, verbose_name='Источник перехода'),
        ),
        migrations.AlterField(
            model_name='mark',
            name='utm_term',
            field=models.CharField(default='', max_length=200, verbose_name='Тип трафика'),
        ),
    ]