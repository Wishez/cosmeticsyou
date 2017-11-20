# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import RegistrForm
from home.forms import CallbackForm
from django.views import View
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
        self.consultant_id = ''

    def get_context_data(self, **kwargs):
        context = super(BaseRegistrationView, self).get_context_data(**kwargs)
        form = RegistrForm()
        callback = CallbackForm()
        context["form"] = form
        context["callback"] = callback
        context["consultant_id"] = self.consultant_id

        return context
class RegistrationView(BaseRegistrationView):
    def __init__(self):
        super(RegistrationView, self).__init__()
    def post(self, request):
        form = RegistrForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('success')

class RefferalRegistrationView(BaseRegistrationView):
    def __init__(self):
        super(RefferalRegistrationView, self).__init__()
    def post(self, request):
        form = RegistrForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('success')

    def get(self, request, consultant_id):
        self.consultant_id = consultant_id
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