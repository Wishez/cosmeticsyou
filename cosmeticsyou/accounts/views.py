# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import RegistrationConsultantForm, RegistrationRefferalConsultantForm
from home.forms import CallbackForm
from .models import Consultant, RefferalConsultant, RelatedConsultant
from django.views.generic import TemplateView
from django.http import Http404
# Create your views here.


class BaseRegistrationView(TemplateView):
    template_name = 'registr.html'

    def __init__(self):
        self.consultant_num = ''
        self.is_refferal_form = False

    def post(self, request, **kwargs):
        data = extract_data(request.POST)
        consultant_num = data["user_led"]
        del data["checkReady"]
        del data["user_led"]
        if  data["empty_middle_name"] == 'on':
            data["empty_middle_name"] = True
        else:
            data["empty_middle_name"] = False

        print('User led', consultant_num)

        # Check of a refferal user.
        if self.is_refferal_form and (consultant_num):

            led_consultant_data = set_led_consultant(
                consultant_num,
                ["user_led", "user_led_1", "user_led_2"],
                [RefferalConsultant, RelatedConsultant, Consultant]
            )

            if led_consultant_data["id"]:
                print('set up led consultant:', led_consultant_data)
                data[led_consultant_data["type"]] = led_consultant_data["id"]



        print(data)
        if self.is_refferal_form:
            form = RegistrationRefferalConsultantForm(
                data or None,
                request.FILES or None
            )
        else:
            form = RegistrationConsultantForm(
                data or None,
                request.FILES or None
            )

        print(form.is_valid())
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('success')
        else:
            return render(
                request,
                self.template_name,
                self.get_context_data()
            )

    def get_context_data(self, **kwargs):
        context = super(BaseRegistrationView, self).get_context_data(**kwargs)

        if self.is_refferal_form:
            form = RegistrationConsultantForm()
        else:
            form = RegistrationRefferalConsultantForm()

        callback = CallbackForm()
        context["form"] = form
        context["callback"] = callback
        context["consultant_num"] = self.consultant_num

        return context

def set_led_consultant(consultant_num, consultant_categories, consultants_models):
    index = 0

    for Model in consultants_models:
        consultant = Model.objects.is_consultant(consultant_num)
        if consultant.exists():
            return {
                "type": consultant_categories[index],
                "id": consultant[0].id
            }
        index = index + 1

    return False
class RegistrationView(BaseRegistrationView):
    def __init__(self):
        super(RegistrationView, self).__init__()


class RefferalRegistrationView(BaseRegistrationView):
    def __init__(self):
        super(RefferalRegistrationView, self).__init__()
        self.is_refferal_form = True

    def get(self, request, consultant_num):
        self.consultant_num = consultant_num
        return render(
            request,
            self.template_name,
            super(RefferalRegistrationView, self).get_context_data()
        )
def success(request):
    callback = CallbackForm()
    return render(request, 'success.html', {
        "callback": callback
    })

def get_consultant(models, consultant_num):
    is_found = False
    for Model in models:
        consultant = Model.objects.filter(consultant_num=consultant_num)
        if consultant.exists():
            return consultant[0]

    return is_found

def personal_room(request, consultant_num):
    if request.method == 'GET':
        callback = CallbackForm()
        consultant = get_consultant(
            [Consultant, RefferalConsultant, RelatedConsultant],
            consultant_num
        )

        if consultant:
            return render(
                request,
                'personal_room.html',
                {
                    "consultant": consultant,
                    "callback": callback

                }
            )
        else:
            raise Http404('')
def extract_data(data):
    new_data = {}
    for key in data:
       new_data[key] = data[key]
    return new_data
new_data = {'last_name': 'Журавлёв', 'first_name': 'Филипп', 'middle_name': '', 'empty_middle_name': 'on', 'birthday': '2017-11-03', 'passport_data': '9705 - 455421', 'phone_number': '+7 (213) 123 12 31', 'city': 'Moscow','region': 'Moscow', 'street': 'Igralnaya', 'num_home': '1', 'num_apartment': '1', 'email': 'rory_mercury@list.ru', 'checkReady': 'on'}
