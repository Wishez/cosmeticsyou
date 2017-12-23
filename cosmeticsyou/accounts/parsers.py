from django.core.mail import EmailMessage
from home.models import EmailMessagesSetting
from django.conf import settings
from django.contrib.sites.models import Site

class MessageParser():
    def __init__(
        self,
        consultant,
        message,
        subject,
        isMessageKey=True
    ):
        self.email_setting  = EmailMessagesSetting.objects.get(is_active='Активная группа')
        self.consultant = consultant
        # Проверка на обычноое ообщение
        setting = self.email_setting
        if isMessageKey:
            self.message = getattr(setting, message)
        else:
            self.message = message

        self.subject = getattr(setting, subject)


        self.variables = [
            'refferal_url',
            'consultant_num',
            'url_to_personal_room',
            'middle_name',
            'first_name',
            'last_name',
            'status',
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
        EmailMessage(
            self.subject,
            self.message,
            getattr(settings, "DEFAULT_FROM_EMAIL", 'support@cosmeticsyou.ru'),
            [self.consultant.email]
        ).send()