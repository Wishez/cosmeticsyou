# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-25 16:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('shares', '0002_auto_20171225_1937'),
    ]

    operations = [
        migrations.CreateModel(
            name='BusinessPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
            ],
            options={
                'verbose_name': 'Страница "Бизнес"',
                'verbose_name_plural': 'Страница "Бизнес"',
                'db_table': 'data_business_page',
            },
        ),
        migrations.CreateModel(
            name='ContactsPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
                ('map', models.TextField(blank=True, default='<iframe class=\'mapContainer__map\' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.9975502050816!2d60.63935701597335!3d56.84598588085985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16c2be5298e21%3A0x77522d799d8f3f75!2z0YPQuy4g0J_QtdGA0LLQvtC80LDQudGB0LrQsNGPLCA3Nywg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDYy!5e0!3m2!1sru!2sru!4v1508837567170" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>', help_text='Карта, которая отображается в контактах', max_length=2048, null=True, verbose_name='Окно с картой')),
            ],
            options={
                'verbose_name': 'Страница "Контакты"',
                'verbose_name_plural': 'Страница "Контакты"',
                'db_table': 'data_contacts_page',
            },
        ),
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
            ],
            options={
                'verbose_name': 'Страница "Главная"',
                'verbose_name_plural': 'Страница "Главная"',
                'db_table': 'data_home_page',
            },
        ),
        migrations.CreateModel(
            name='MediaPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
            ],
            options={
                'verbose_name': 'Станица "Видео"',
                'verbose_name_plural': 'Страница "Видео"',
                'db_table': 'data_Media_page',
            },
        ),
        migrations.CreateModel(
            name='RegistrationPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
            ],
            options={
                'verbose_name': 'Страница "Регистрация"',
                'verbose_name_plural': 'Страница "Регистрация"',
                'db_table': 'data_registration_page',
            },
        ),
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('name', models.CharField(default='Глобальная настройка', max_length=100, verbose_name='Имя настройки')),
                ('widgets', models.TextField(blank=True, max_length=8196, null=True, verbose_name='Метрики, виджеты и прочее')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='Глобальное META-описание сайта')),
                ('email', models.CharField(blank=True, default='support@cosmeticsyou.ru', max_length=200, null=True, verbose_name='Email')),
                ('phone', models.CharField(blank=True, default='+7 (965) 158-14-81', max_length=90, null=True, verbose_name='Телефон')),
                ('city', models.CharField(blank=True, default='г. Москва', max_length=100, null=True, verbose_name='Город')),
                ('address', models.CharField(blank=True, default='Ивантеевская д. 13 кор.1', max_length=200, null=True, verbose_name='Адрес')),
                ('addressHref', models.CharField(blank=True, default='https://www.google.ru/maps/place/Ivanteevskaya+ul.,+13%D0%BA1,+Moskva,+107150/@55.818067,37.7239063,17z/data=!3m1!4b1!4m5!3m4!1s0x46b53450cf0645b9:0x869f26e9d7ad24d3!8m2!3d55.818067!4d37.726095?sa=X&ved=0ahUKEwi_jtfNru3SAhWkE5oKHSiQDNYQ8gEIHjAA', max_length=500, null=True, verbose_name='Ссылка перенаправляющая на карты(Google/Yandex)')),
            ],
            options={
                'verbose_name': 'Настройка',
                'verbose_name_plural': 'Настройки',
                'db_table': 'site_settings',
            },
        ),
        migrations.CreateModel(
            name='SharesPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('title', models.CharField(blank=True, help_text='Название страницы во вкладке', max_length=100, null=True, verbose_name='Заголовок')),
                ('meta', models.TextField(blank=True, max_length=300, null=True, verbose_name='META-описание страницы')),
                ('shares', models.ManyToManyField(help_text='Акции, которые будут отображаться на странице "Акции".', related_name='shown_prices_sauna', to='shares.Share', verbose_name='Акции')),
            ],
            options={
                'verbose_name': 'Страница "Акции"',
                'verbose_name_plural': 'Страница "Акции"',
                'db_table': 'data_prices_page',
            },
        ),
    ]
