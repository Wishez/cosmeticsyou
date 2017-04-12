# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Program(models.Model):
    img = models.ImageField(upload_to='uploads/program/', verbose_name='Изображение программы', blank=True, null=True)
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    p = models.CharField(max_length=150, verbose_name='Параграф под заголовком', blank=True, null=True)

    offer_1 = models.CharField(max_length=300, verbose_name='Предложение(под-заголовок)', blank=True, null=True)

    action_1_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_1_2 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)
    action_1_3 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)
    action_1_4 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)

    offer_2 = models.CharField(max_length=300, verbose_name='Предложение(под-заголовок)', blank=True, null=True)

    action_2_1 = models.CharField(max_length=350, verbose_name='Действие для выполнение', blank=True, null=True)
    action_2_2 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)
    action_2_3 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)
    action_2_4 = models.CharField(max_length=350, verbose_name='Действия для выполнения', blank=True, null=True)

    #published = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

    def publish(self):
        #self.published = timezone.now()
        self.save()

    class Meta:
        verbose_name = 'Стартовая программа'
        verbose_name_plural = 'Стартовые программы'

@python_2_unicode_compatible
class Slider(models.Model):
    slide_1 = models.ImageField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_2 = models.ImageField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_3 = models.ImageField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_4 = models.ImageField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)
    slide_5 = models.ImageField(upload_to='uploads/slider/', verbose_name='Слайд', blank=True, null=True)

    def __str__(self):
        return 'Главный слайдер'

    def show(self):
        self.save()

    class Meta:
        verbose_name = 'Слайдер'
        verbose_name_plural = 'Слайды'