
from django.test import TestCase
from model_mommy import mommy
from django.urls import reverse
from shares.models import *
from django.utils.timezone import now

class TestSharesAPI(TestCase):
    def setUp(self):
        slug = 'slug'
        content = 'Content.'
        title = 'Title.'
        page_title = 'Page Title'

        self.single_news = mommy.make(
            'shares.News',
            page_title=page_title,
            title=title,
            content=content,
            slug=slug,
        )
        self.news_list = mommy.make(
            'shares.News',
            _quantity=5
        )

    def test_to_get_single_news(self):
        pass

    def test_to_get_list_news(self):
        pass