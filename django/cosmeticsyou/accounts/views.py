# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
#from django.views.generic import TemplateView
from django.utils import timezone
from .forms import RegistrForm

# Create your views here.



def register(request):
    if request.method == "POST":
        form = RegistrForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.registered_date = timezone.now()
            user.save()
            return redirect('success')
    else:
        form = RegistrForm()
    return render(request, 'registr.html', {'form': form})

def success(request):
    return render(request, 'success.html', {})