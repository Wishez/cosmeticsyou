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

    def post(self, request):
        data = request.POST
        print(data)
        print('User led', data["user_led"])
        consultant_num = data["user_led"]

        # Check of a refferal user.
        if self.is_refferal_form and (consultant_num):
            del data["user_led"]

            data = set_led_consultant(
                data,
                consultant_num,
                ["user_led", "user_led_1", "user_led_2"],
                [RefferalConsultant, RelatedConsultant, Consultant]
            )

        print(data)
        if self.is_refferal_form:
            form = RegistrationRefferalConsultantForm(data)
        else:
            form = RegistrationConsultantForm(data)

        print(form.is_valid())
        if form.is_valid():
            user = form.save(commit=False)
            user.save()

            return redirect('success')
        return redirect('success')
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

def set_led_consultant(data, consultant_num, consultant_categories, consultants_models):
    index = 0

    for Model in consultants_models:
        consultant = Model.objects.is_consultant(consultant_num)
        if consultant.exists():
            data[consultant_categories[index]] = consultant[0].id
            break
        index = index + 1

    return data
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