from rest_framework.serializers import ModelSerializer, SlugRealtedField
from ..models import *



class NewsListSerializer(ModelSerializer):
    preview = SlugRealtedField(
        read_only=True,
        slug_field="image"
    )
    class Meta:
        model = News
        fields = (
            'uuid',
            'title',
            'preview',
            'slug',
            'announce',
            'created_at',
            'page_title'
        )


class ShareSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = (
            'uuid',
            'title',
            'preview',
            'created_at',
            'content',
            'page_title',
            'album'
        )


