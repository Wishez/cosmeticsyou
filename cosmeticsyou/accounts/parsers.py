# -*- encoding: utf-8 -*-
from django.core.mail import EmailMessage
from home.models import EmailMessagesSetting
from django.conf import settings
from django.contrib.sites.models import Site
from twilio.rest import Client
import os, time
from threading import Thread

class MessageParser():
    def __init__(
        self,
        consultant=None,
        message='',
        subject='',
        isMessageKey=True,
        recipients=[]
    ):
        self.consultant = consultant
        self.email_setting  = EmailMessagesSetting.objects.get(is_active='Активная группа')
        
        # Проверка на обычноое ообщение
        if isMessageKey:
            setting = self.email_setting
            self.message = getattr(setting, message, '')
            self.subject = getattr(setting, subject, '')

        else:
            self.message = message
            self.subject = subject


        self.recipients = recipients

        self.variables = [
            'refferal_url',
            'consultant_num',
            'url_to_personal_room',
            'middle_name',
            'first_name',
            'last_name',
            'status',
            'phone_number',
            'email',
            'region',
            # 'birthday',
            'city'
        ]

        self.full_name = '%s %s' % (
            getattr(consultant, 'first_name', None),
            getattr(consultant, 'last_name', None)
        )

    def __call__(self):
        self.parse_text()
        self.send_parsed_text_to_email()

    def parse_extra_variables(self, text):
        text = text.replace(
            '{{site}}',
            Site.objects.get_current().domain
        )

        text = text.replace(
            '{{full_name}}',
            self.full_name
        )
        return text
    def parse_text(self):
        message = self.message
        subject = self.subject

        consultant = self.consultant
        # Замена дополнительных переменных.
        message = self.parse_extra_variables(message)
        subject = self.parse_extra_variables(subject)
        # Замена найденных переменных.
        for variable in self.variables:
            pattern = '{{%s}}' % variable
            fill_variable = getattr(consultant, variable, None)

            if fill_variable:
                message = message.replace(
                    pattern,
                    fill_variable
                )

                subject = subject.replace(
                    pattern,
                    fill_variable
                )

        self.message = message
        self.subject = subject


    def send_parsed_text_to_email(self):
        is_allow_sending_messages = self.email_setting.is_allow_sending_messages

        if is_allow_sending_messages == False: return None

        recipients_length = len(self.recipients)
        recipients = []
        consultant_has_email = hasattr(self.consultant, 'email')

        if recipients_length:
            recipients += self.recipients
        else:
            recipients += self.consultant.email



        if consultant_has_email or recipients_length:
            EmailMessage(
                self.subject,
                self.message,
                getattr(settings, "DEFAULT_FROM_EMAIL", 'support@cosmeticsyou.ru'),
                recipients
            ).send()

def create_user_and_notify_about(user, page):
    user.save()
    send_sms_notification(page, user)

    notificateUserToMail = MessageParser(
		user,
		'after_register_message',
        'after_register_subject',
		isMessageKey=True
	)
    
    birthday = '%s' % user.birthday #.strftime("%Y-%m-%d %H:%M:%S")
    middle_name = getattr(user, 'middle_name', '')

    messageForCustomer = 'ФИО: {{last_name}} {{first_name}} %s\n'
    'День рождения: %s\n'
    'Телефон: {{phone_number}}\n'
    'Email: {{email}}\n'
    'Почтовый индекс: {{region}}\n'
    'Город: {{city}}\n'
    '\nК панели администрирования: https://{{site}}/admin/accounts/user/\n' % (middle_name, birthday,),
    subjectOfTheMessage = 'Новый консультант присоединился к нашим рядам.'

    notificateCustomerToMail = MessageParser(
        user,
        messageForCustomer,
        subjectOfTheMessage,
        isMessageKey=False,
        recipients=["shiningfinger@list.ru"]
    )

    notificateUserToMail()
    notificateCustomerToMail()

def send_sms_notification(page, consultant):
    phone_from = page.phone_from
    phones_to = page.phones_to.replace(' ', '').split(',')
    account_sid = page.account_sid
    auth_token = page.auth_token

    if not auth_token:
        return False

    parser = MessageParser(
        consultant,
        message=page.message,
        isMessageKey=False
    )

    parser.parse_text()
    message = parser.message
    client = Client(account_sid, auth_token)

    for phone_to in phones_to:
        time.sleep(4)
        client.messages.create(
            phone_to,
            body=message,
            from_=phone_from
        )