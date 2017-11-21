# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import RegistrationConsultantForm, RegistrationRefferalConsultantForm
from home.forms import CallbackForm
from .models import Consultant, RefferalConsultant, RelatedConsultant
from django.views.generic import TemplateView
# Create your views here.



def register(request):
    if request.method == "POST":
        form = RegistrForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('success')
    else:
        form = RegistrForm()
    callback = CallbackForm()
    return render(request, 'registr.html', {
        'form': form,
        'callback': callback
    })
class BaseRegistrationView(TemplateView):
    template_name = 'registr.html'

    def __init__(self):
        self.consultant_num = ''
        self.is_refferal_form = False

    def post(self, request):
        data = request.POST
        is_refferal_consultant = False
        print(data["user_led"])
        consultant_num = data["user_led"]

        # Check of a refferal user.
        if len(consultant_num):
            data["user_led"] = ''
            is_refferal_consultant = True

            data = set_led_consultant(
                data,
                consultant_num,
                ["user_led", "user_led_1", "user_led_2"],
                [RefferalConsultant, RelatedConsultant, Consultant]
            )

        print(data)
        if is_refferal_consultant:
            form = RegistrationRefferalConsultantForm(data)
        else:
            form = RegistrationConsultantForm(data)

        if form.is_valid():
            user = form.save(commit=False)
            user.save()

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
    def post(self, request):
        form = RegistrationConsultantForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('success')

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