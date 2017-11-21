# -*- encoding: utf-8 -*-
from django.db import models
# from .abstract import UserBase
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
# Create your models here.


class ConsultantManager(models.Manager):
    use_for_related_fields = True

    def is_consultant(self, consultant_num, **kwargs):
        return self.filter(consultant_num=consultant_num, **kwargs)


class ConsultantBase(models.Model):
    last_name = models.CharField(_('Фамилия'), max_length=36)
    first_name = models.CharField(_('Имя'), max_length=32)
    middle_name = models.CharField(_('Отчество'), max_length=32, blank=True, null=True)
    consultant_num = models.CharField(_('Номер консультанта'), max_length=40, blank=True, null=True)
    url_to_personal_room = models.URLField(
        _('Ссылка в личный кабинет'),
        max_length=150,
        blank=True,
        null=True
    )

    refferal_url =  models.URLField(
        _('Реферальная ссылка'),
        max_length=150,
        blank=True,
        null=True
    )
    user_led = models.ForeignKey(
        "self",
        verbose_name=_('Пригласивший консультант'),
        blank=True,
        null=True
    )
    user_lead = models.ManyToManyField(
        "self",
        verbose_name=_("Приглашённые консультантом"),

        blank=True
    )

    registered_date = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    objects = ConsultantManager()
    class Meta:
        abstract = True
        ordering = ['-registered_date']


class FullConsultant(ConsultantBase):
    middle_name = models.CharField(_('Отчество'), max_length=32, blank=True, null=True)
    empty_middle_name = models.BooleanField(_('Нет отчества.'), default=False)

    birthday = models.DateTimeField(_('День рождения'))
    citizenship = models.BooleanField(_('Не гражданин РФ.'), default=False)
    passport_data = models.CharField(
        _('Серия и номер паспорта'),
        max_length=26
    )
    phone_number = models.CharField(_('Номер телефона'), max_length=26)

    city = models.CharField(_('Город'), max_length=50)
    region = models.CharField(_('Область'), max_length=50, blank=True, null=True)

    street = models.CharField(_('Улица'), max_length=50)
    num_home = models.CharField(_('Дом'), max_length=5)
    num_apartment = models.DecimalField(_('Квартира'), max_digits=999, decimal_places=1)

    email = models.EmailField(_('E-mail'), unique=True)
    register_statuses = (
        (_('Новый'), 'Новый'),
        (_('Зарегистрированный А'), 'Зарегистрированный А'),
        (_('Зарегистрированный Б'), 'Зарегистрированный Б'),
        (_('Пустой'), 'Пустой'),
    )

    status = models.CharField(
        _('Статус регистрации'),
        max_length=20,
        choices=register_statuses,
        default='Новый'
    )
    class Meta:
        abstract = True


class RefferalConsultantTableRelations(FullConsultant):
    class Meta:
        verbose_name=_('Consultant')
    pass
class RelatedConsultantTableRelations(ConsultantBase):
    pass

class Consultant(FullConsultant):

    user_led_1 = models.ForeignKey(
        RelatedConsultantTableRelations,
        verbose_name=_('Пригласивший консультант(Сторонний)'),
        blank=True,
        null=True
    )
    user_led_2 = models.ForeignKey(
        RefferalConsultantTableRelations,
        verbose_name=_('Пригласивший консультант(Реферальный)'),
        blank=True,
        null=True
    )
    user_lead_1 = models.ManyToManyField(
        RelatedConsultantTableRelations,
        verbose_name=_("Приглашённые консультантом(Сторонние)"),
        related_name="related_consultants_of_consultant",
        blank=True
    )
    user_lead_2 = models.ManyToManyField(
        RefferalConsultantTableRelations,
        verbose_name=_("Приглашённые консультантом(Реферальные)"),
        related_name="refferal_consultants_of_consultant",
        blank=True
    )

    class Meta:
        verbose_name = _('Консультант')
        verbose_name_plural = _('Консультанты')

    def __str__(self):
        return '%s %s | Статус: %s' % (self.last_name, self.first_name, self.status)

class RelatedConsultant(RelatedConsultantTableRelations):
    user_led_1 = models.ForeignKey(
        "Consultant",
        verbose_name=_('Пригласивший консультант(Обычный)'),
        blank=True,
        null=True
    )
    user_led_2 = models.ForeignKey(
        "RefferalConsultantTableRelations",
        verbose_name=_('Пригласивший консультант(Реферальный)'),
        blank = True,
        null=True
    )
    user_lead_1 = models.ManyToManyField(
        "Consultant",
        verbose_name=_("Приглашённые консультантом(Обычные)"),
        related_name="consultants_of_related_consultant",
        blank=True
    )
    user_lead_2 = models.ManyToManyField(
        "RefferalConsultantTableRelations",
        verbose_name=_("Приглашённые консультантом(Реферальные)"),
        related_name="refferal_consultants_of_related_consultant",
        blank=True
    )
    class Meta:
        verbose_name = _('Сторонний консультант')
        verbose_name_plural = _('Сторонний консультанты')

class RefferalConsultant(FullConsultant):
    user_led_1 = models.ForeignKey(
        "RelatedConsultant",
        verbose_name=_('Пригласивший консультант(Сторонний)'),
        blank=True,
        null=True
    )
    user_led_2 = models.ForeignKey(
        "Consultant",
        verbose_name=_('Пригласивший консультант(Обычный)'),
        blank=True,
        null=True
    )
    user_lead_1 = models.ManyToManyField(
        "RelatedConsultant",
        verbose_name=_("Приглашённые консультантом(Сторонние)"),
        related_name = "consultants_of_refferal_consultant",
        blank = True
    )
    user_lead_2 = models.ManyToManyField(
        "Consultant",
        verbose_name=_("Приглашённые консультантом(Обычные)"),
        related_name="consultants_of_refferal_consultant",
        blank=True
    )
    class Meta:
        verbose_name = _('Реферальный консультант')
        verbose_name_plural = _('Реферальные консультанты')