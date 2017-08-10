# -*- encoding: utf-8 -*-
from django.db import models
from django.utils.translation import gettext_lazy as _

class Callback(models.Model):
    callback_name = models.CharField(max_length=30, verbose_name='Имя')
    callback_phone = models.CharField(max_length=30, verbose_name='Телефон')
    callback_message = models.TextField(max_length=250, verbose_name='Комментарий')

    def __str__(self):
        return self.callback_name + _('|') + self.callback_phone

    class Meta:
        verbose_name = _('Обратный вызов')
        verbose_name_plural = _('Обратные вызовы')


class Program(models.Model):
    img = models.FileField(upload_to='uploads/program/', verbose_name='Изображение программы', blank=True, null=True)
    title = models.CharField(max_length=350, verbose_name='Заголовок',  blank=True, null=True)
    p = models.CharField(max_length=350, verbose_name='Параграф под заголовком', blank=True, null=True)

    offer_1 = models.CharField(max_length=350, verbose_name='Предложение 1 (под-заголовок)', blank=True, null=True)

    action_1_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_1_2 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_1_3 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_1_4 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)

    offer_2 = models.CharField(max_length=350, verbose_name='Предложение (под-заголовок)', blank=True, null=True)

    action_2_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_2_2 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_3 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_4 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_5 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_2_6 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_7 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_8 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_9 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_2_10 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_11 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_2_12 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)

    offer_3 = models.CharField(max_length=300, verbose_name='Предложение 3 (под-заголовок)', blank=True, null=True)

    action_3_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_3_2 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_3 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_4 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_5 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_3_6 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_7 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_8 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_9 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_3_10 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_11 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_3_12 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)

    offer_4 = models.CharField(max_length=300, verbose_name='Предложение 4 (под-заголовок)', blank=True, null=True)

    action_4_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_4_2 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_3 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_4 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_5 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_4_6 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_7 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_8 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_9 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_4_10 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_11 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)
    action_4_12 = models.CharField(max_length=350, verbose_name='Действие для выполнения', blank=True, null=True)

    def __str__(self):
        return self.title

    def publish(self):
        self.save()

    class Meta:
        verbose_name = _('Стартовая программа')
        verbose_name_plural = _('Стартовые программы')


class Slider(models.Model):
    slide_1 = models.FileField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_2 = models.FileField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_3 = models.FileField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_4 = models.FileField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_5 = models.FileField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)

    def __str__(self):
        return _('Главный слайдер')

    def show(self):
        self.save()

    class Meta:
        verbose_name = _('Слайдер')
        verbose_name_plural = ('Слайды')