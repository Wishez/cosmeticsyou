# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import RegistrForm
from home.forms import CallbackForm

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

def success(request):
    return render(request, 'success.html', {})