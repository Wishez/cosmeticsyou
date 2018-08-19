# -*- encoding: utf-8 -*-
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import *

class UserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    lookup_field = 'uuid'
