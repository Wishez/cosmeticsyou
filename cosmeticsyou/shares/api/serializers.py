from rest_framework.serializers import ModelSerializer
from ..models import *

class SharesListSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = (
            'uuid',
            'title',
            'img',
            'slug',
            'announce',
            'published_date',
        )


class ShareSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = (
            'uuid',
            'title',
            'image',
            'slug',
            'text',
            'created_at',
            'page_title'
        )


