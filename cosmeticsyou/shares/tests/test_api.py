
from django.test. import TestCase
from mommy_model import mommy

from shares.models import *
from django.utils.timezone import now

class TestSharesAPI(TestCase):
    def setUp(self):
        self.share = mommy.make(
            auto_fill=Truem
            created=now(),
            modified=now()
        )