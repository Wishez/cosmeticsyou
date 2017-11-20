# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-11 12:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('callback_name', models.CharField(max_length=30, verbose_name='Имя')),
                ('callback_phone', models.CharField(max_length=30, verbose_name='Телефон')),
                ('callback_message', models.TextField(max_length=250, verbose_name='Комментарий')),
            ],
            options={
                'verbose_name': 'Обратный вызов',
                'verbose_name_plural': 'Обратные вызовы',
            },
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.FileField(blank=True, null=True, upload_to='uploads/program/', verbose_name='Изображение программы')),
                ('title', models.CharField(blank=True, max_length=350, null=True, verbose_name='Заголовок')),
                ('p', models.CharField(blank=True, max_length=350, null=True, verbose_name='Параграф под заголовком')),
                ('offer_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Предложение 1 (под-заголовок)')),
                ('action_1_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_1_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_1_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_1_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Предложение (под-заголовок)')),
                ('action_2_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_3', models.CharField(blank=True, max_length=300, null=True, verbose_name='Предложение 3 (под-заголовок)')),
                ('action_3_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_4', models.CharField(blank=True, max_length=300, null=True, verbose_name='Предложение 4 (под-заголовок)')),
                ('action_4_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
            ],
            options={
                'verbose_name': 'Стартовая программа',
                'verbose_name_plural': 'Стартовые программы',
            },
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slide_1', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_2', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_3', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_4', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_5', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
            ],
            options={
                'verbose_name': 'Слайдер',
                'verbose_name_plural': 'Слайды',
            },
        ),
    ]
