from rest_framework.serializers import ModelSerializer
from ..models import *

class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = (
            'uuid',
            'first_name',
            'last_name',
            'middle_name',
            'username',
            'avatar',
            'consultant_num',
            'email'
        )


