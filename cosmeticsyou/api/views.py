# from django.shortcuts import render
from accounts.helpers import get_consultant
from accounts.models import RefferalConsultant, RelatedConsultant, User
from django.http import JsonResponse, HttpResponse
# Create your views here.


def get_consultant_by_consultant_number(request, consultant_number):
    response = None

    if request.method == "GET":
        consultant = get_consultant(
            consultant_number,
            ["user_led", "user_led_1", "user_led_2"],
            [RefferalConsultant, RelatedConsultant, User]
        )



        if consultant and consultant["instance"]:
            instance = consultant["instance"]

            response = JsonResponse({
                "isConsultantExists": True,
                "isConsultantNotRegistered": not getattr(instance, "password"),
                "name": getattr(instance, "first_name"),
            })
        else:
            response = JsonResponse({
                "isConsultantExists": False,
                "isConsultantNotRegistered": False,
                "name": ""
            })
    else:
        response = HttpResponse('It is not GET request!')

    return response