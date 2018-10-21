# -*- encoding: utf-8 -*-
from .models import User, RefferalConsultant, RelatedConsultant

def get_consultant( 
    consultant_num,
    consultant_categories=["ReferralConsultant", "RelatedConsultant", "Consultant"],
    consultants_models=[RefferalConsultant, RelatedConsultant, User]
):
    index = 0

    for Model in consultants_models:
        consultant = Model.objects.is_consultant(consultant_num)
        if consultant.exists():
            return {
                "type": consultant_categories[index],
                "instance": consultant[0]
            }
        index = index + 1

    return False