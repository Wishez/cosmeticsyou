
from django.test import TestCase
from model_mommy import mommy

from shares.models import *
from django.utils.timezone import now

class TestSharesAPI(TestCase):
    def setUp(self):
        pass
        # self.share = mommy.make(
        #     auto_fill=True
        #     created=now(),
        #     modified=now()
        # )