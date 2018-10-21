# from django.shortcuts import render
from accounts.helpers import get_consultant
from accounts.models import RefferalConsultant, RelatedConsultant, User
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


def is_consultant_with(username):
    for Model in [RefferalConsultant, RelatedConsultant, User]:

        user = Model.objects.filter(username=username)
        if user.exists():
            return True

    return False

# Create your views here.
def get_registered_user(email, password):
    # email = re.match(r'^.*@.*\..{2}$', email)
    for Model in [RefferalConsultant, RelatedConsultant, User]:

        user = Model.objects.filter(email=email, password=password)
        if user.exists():
            return user

    return False

def isGetMethod(request):
    return request.method == "GET"

def login_user(request):
    response = {
        'meta': {
            'status': 400,
            'message': 'Bad Request',
        },
    }

    if isGetMethod(request):
        user_credentials = request.GET
        email, password = user_credentials
        user = get_registered_user(email, password)

        if user:
            response.meta = {
                'status': 200,
                'message': '',
            }
            response.data = {
                'email': email,
                'password': password,
            }

            for key in ['uuid', 'username', 'avatar', 'first_name', 'last_name', 'email', 'middle_name']:
                response.data[key] = user[key]
        else:
            response.meta.message = 'Неправильный логин или пароль'

    return JsonResponse(response)

@csrf_exempt
def register_user(request, consultant_number):
    response = {
        'meta': {
            'status': 400,
            'message': 'Bad Request',
        },
    }

    if request.method == 'POST':
        userData = json.loads(request.body)
        username = userData['username'] 
        password = userData['password']

        if is_consultant_with(username): 
            response['meta']['message'] = 'Это имя пользователя уже занято.' 
        else:
            consultant = get_consultant(consultant_number)['instance']

            consultant.username = username
            consultant.password = password
            consultant.save()

            response['meta'] = {
                'status': 200,
                'message': '',
            }
            response['data'] = {
                'email': consultant.email,
                'username': username,
            }
    
    return JsonResponse(response) 





def get_consultant_by_consultant_number(request, consultant_number):
    response = None
    data = {
       "isConsultantExists": False,
       "isConsultantNotRegistered": False,
       "name": ""
    }
    meta = {
        "status": '400',
        "message": 'Bad Request',
    }

    if isGetMethod(request):
        consultant = get_consultant(
            consultant_number,
            ["user_led", "user_led_1", "user_led_2"],
            [RefferalConsultant, RelatedConsultant, User]
        )

        if consultant and consultant["instance"]:
            instance = consultant["instance"]

            response = JsonResponse({
                "data": {
                    "isConsultantExists": True,
                    "isConsultantNotRegistered": not getattr(instance, "password"),
                    "name": getattr(instance, "first_name"),
                },
                "meta": {
                    'status': 'OK',
                    'message': '',
                }
            })
        else:
            response = JsonResponse({
                "data": data,
                "meta": meta,
            })
    else:
        response = HttpResponse('It is not GET request!')

    return response