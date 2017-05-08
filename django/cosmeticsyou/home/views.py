from django.shortcuts import render
from .models import *
from .forms import CallbackForm
from django.utils import timezone
from django.http import HttpResponse




def index(request):
    #program = Program.objects.filter(published__lte=timezone.now()).order_by('-published')
    program = Program.objects.all()
    slider = Slider.objects.all()
    callback = CallbackForm()
    return render(request, 'index.html', {
        'program': program,
        'slider': slider,
        'callback': callback
    })


def register_callback(request):
    if request.method == "POST":
        form = CallbackForm(data=request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            print(form)
            html = '<h3 class="callback__success">Спасибо за запрос.<br /> Скоро с вами свяжутся.</h2>'
            return HttpResponse(html)

    return HttpResponse('')
