# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-25 16:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields
import pages.validators


class Migration(migrations.Migration):

    dependencies = [
        ('shares', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='share',
            name='created',
            field=model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created'),
        ),
        migrations.AddField(
            model_name='share',
            name='meta',
            field=models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы'),
        ),
        migrations.AddField(
            model_name='share',
            name='modified',
            field=model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified'),
        ),
        migrations.AddField(
            model_name='share',
            name='slug',
            field=models.SlugField(default='', help_text='К примеру, "my_new_awesome_hall"', max_length=70, unique=True, validators=[pages.validators.validate_slug_field], verbose_name='Название ссылки к странице сауны'),
        ),
    ]
