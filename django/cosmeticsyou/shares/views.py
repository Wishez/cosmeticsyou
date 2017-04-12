from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Share
# Create your views here.

def share_list(request):
    shares = Share.objects.filter(published_date__lte=timezone.now()).order_by('published_date').reverse()
    return render(request, 'shares.html', {'shares':shares})

def share_detail(request, pk):
    share = get_object_or_404(Share, pk=pk)
    return render(request, 'share_detail.html', {'share': share})
