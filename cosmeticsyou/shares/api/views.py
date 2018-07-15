# -*- encoding: utf-8 -*-
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import *

class SharesListView(ListAPIView):
    queryset = Share.objects.all()
    serializer_class = SharesListSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    lookup_field = 'uuid'

class ShareView(RetrieveAPIView):
    queryset = Share.objects.all()
    serializer_class = ShareSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    lookup_field = 'slug'
