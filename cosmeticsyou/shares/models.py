# -*- encoding: utf-8 -*-
# import sys
# reload(sys)
# sys.setdefaultencoding('utf-8')
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Share(models.Model):
    title = models.CharField(max_length=250, verbose_name="Название акции")
    img = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    text = models.TextField(blank=True, null=True, verbose_name="Параграф")
    text_2 = models.TextField( blank=True, null=True, verbose_name="Параграф")
    text_3 = models.TextField( blank=True, null=True, verbose_name="Параграф")

    conditions_h2_1 = models.CharField(blank=True, null=True, max_length=200, verbose_name="Условия акции")

    item_1_1 = models.TextField(blank=True, null=True, verbose_name="Первый пункт условий")
    p_1_1_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_1_1_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_1_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображние")
    img_1_1_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_1_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_1_1_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_1_2 = models.TextField(blank=True, null=True, verbose_name="Второй пункт условий")
    p_1_2_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_1_2_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_2_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_2_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_2_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_1_2_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_1_3 = models.TextField(blank=True, null=True, verbose_name="Третий пункт условий")
    p_1_3_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_1_3_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_3_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_3_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_3_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_1_3_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_1_4 = models.TextField(blank=True, null=True, verbose_name="Четвёртый пункт условий")
    p_1_4_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_1_4_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_4_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_4_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_4_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_1_4_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_1_5 = models.TextField(blank=True, null=True, verbose_name="Пятый пункт условий")
    p_1_5_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_1_5_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_5_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_5_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_1_5_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_1_5_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    conditions_h2_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Условия акции")

    item_2_1 = models.TextField( blank=True, null=True, verbose_name="Первый пункт условий")
    p_2_1_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_2_1_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_1_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_1_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_1_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_2_1_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_2_2 = models.TextField(blank=True, null=True, verbose_name="Второй пункт условий")
    p_2_2_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_2_2_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_2_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_2_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_2_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_2_2_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_2_3 = models.TextField(blank=True, null=True, verbose_name="Третий пункт условий")
    p_2_3_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_2_3_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_3_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_3_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_3_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_2_3_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_2_4 = models.TextField(blank=True, null=True, verbose_name="Четвёртый пункт условий")
    p_2_4_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_2_4_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_4_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_4_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_4_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_2_4_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    item_2_5 = models.TextField(blank=True, null=True, verbose_name="Пятый пункт условий")
    p_2_5_1 = models.TextField(blank=True, null=True, verbose_name="Параграф")
    img_2_5_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_5_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_5_3 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    img_2_5_4 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение")
    p_2_5_2 = models.TextField(blank=True, null=True, verbose_name="Параграф")

    set_h3_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Набор")

    item_s1_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s1_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s1_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s1_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    img_s1_1= models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")
    img_s1_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")

    set_h3_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Набор")

    item_s2_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s2_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s2_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s2_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    img_s2_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")
    img_s2_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")

    set_h3_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Набор")

    item_s3_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s3_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s3_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s3_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    img_s3_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")
    img_s3_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")

    set_h3_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Набор")

    item_s4_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s4_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s4_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s4_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    img_s4_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")
    img_s4_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")

    set_h3_5 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Набор")

    item_s5_1 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s5_2 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s5_3 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    item_s5_4 = models.CharField(max_length=200, blank=True, null=True, verbose_name="Вещь в наборе")
    img_s5_1 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")
    img_s5_2 = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True, verbose_name="Изображение набора")

    additional_text = models.TextField(
        _('Дополнительный текст'),
        max_length=16384, blank=True, null=True)
    created_date = models.DateTimeField(
        _('Дата создания'),
        default=timezone.now
    )
    published_date = models.DateTimeField(
        _('Дата публикации'),
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = _('Акция')
        verbose_name_plural = _('Акции')
        ordering = ['-published_date']

    def publish(self):
        self.published_date= timezone.now()
        self.save()

    def __str__(self):
        return self.title




