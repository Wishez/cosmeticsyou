# -*- encoding: utf-8 -*-

def get_consultant(consultant_num, consultant_categories, consultants_models):
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