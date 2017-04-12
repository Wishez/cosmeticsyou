from django.shortcuts import render
from .models import Program, Slider
from django.utils import timezone



def index(request):
    #program = Program.objects.filter(published__lte=timezone.now()).order_by('-published')
    program = Program.objects.all()
    slider =  Slider.objects.all()
    return render(request, 'index.html', {
        'program': program,
        'slider': slider
    })
