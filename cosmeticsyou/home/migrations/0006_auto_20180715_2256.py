# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-07-15 19:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20180119_0921'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Program',
        ),
        migrations.DeleteModel(
            name='Slider',
        ),
    ]