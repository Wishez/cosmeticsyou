# -*- encoding: utf-8 -*-
from django import template
from django.utils import formats
register = template.Library()


def get_prop(referral, prop):
    return getattr(referral, prop, 'ー')

def create_referrals_list(related_referrals):
    referrals = related_referrals.all()
    if not referrals.count(): return ''

    html = ''

    for ref in referrals:

        html += '<tr class="referralOfConsultantInfo">' \
                    '<td class="referralOfConsultantInfo__fullName">%s</td> ' \
                    '<td class="referralOfConsultantInfo__email">%s</td>' \
                    '<td class="referralOfConsultantInfo__phone">%s</td>' \
                    '<td class="referralOfConsultantInfo__registeredDate">%s</td>' \
                '</tr>' % (
                ref.get_full_name(),
                '<a href="mailto:%s">%s</a>' % (get_prop(ref, "email"), get_prop(ref, "email")),
                '<a href="tel:%s">%s</a>' % (get_prop(ref, "phone_number"), get_prop(ref, "phone_number")),
                formats.date_format(ref.registered_date, "DATE_FORMAT")
            )

    return html

def count_referrals(referrals):
    return referrals.all().count()


register.filter('make_referrals_data', create_referrals_list)
register.filter('count', count_referrals)