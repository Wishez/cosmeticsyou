# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-11-20 14:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_relatedconsultanttablerelations_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consultant',
            name='status',
            field=models.CharField(choices=[('Новый', 'Новый'), ('Зарегистрированный А', 'Зарегистрированный А'), ('Зарегистрированный Б', 'Зарегистрированный Б'), ('Пустой', 'Пустой')], default='Новый', max_length=20, verbose_name='Статус регистрации'),
        ),
        migrations.AlterField(
            model_name='refferalconsultant',
            name='status',
            field=models.CharField(choices=[('Новый', 'Новый'), ('Зарегистрированный А', 'Зарегистрированный А'), ('Зарегистрированный Б', 'Зарегистрированный Б'), ('Пустой', 'Пустой')], default='Новый', max_length=20, verbose_name='Статус регистрации'),
        ),
        migrations.AlterField(
            model_name='refferalconsultanttablerelations',
            name='status',
            field=models.CharField(choices=[('Новый', 'Новый'), ('Зарегистрированный А', 'Зарегистрированный А'), ('Зарегистрированный Б', 'Зарегистрированный Б'), ('Пустой', 'Пустой')], default='Новый', max_length=20, verbose_name='Статус регистрации'),
        ),
    ]
