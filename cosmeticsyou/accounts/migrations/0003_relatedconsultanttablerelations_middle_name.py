# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-11-20 14:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20171120_1724'),
    ]

    operations = [
        migrations.AddField(
            model_name='relatedconsultanttablerelations',
            name='middle_name',
            field=models.CharField(blank=True, max_length=32, null=True, verbose_name='Отчество'),
        ),
    ]
