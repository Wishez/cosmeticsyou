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
def get_registered_user(username, password):
    # email = re.match(r'^.*@.*\..{2}$', email)
    for Model in [RefferalConsultant, RelatedConsultant, User]:

        user = Model.objects.filter(email=username, password=password)
        if user.exists():
            return user[0]

        user = Model.objects.filter(username=username, password=password)
        if user.exists():
            return user[0]

    return False

def isGetMethod(request):
    return request.method == "GET"

@csrf_exempt
def login_user(request):
    response = {
        'meta': {
            'status': 400,
            'message': 'Bad Request',
        },
    }
    print(request.method)
    if request.method == "POST":
        print(request.body)
        user_credentials = json.loads(request.body)
        username = user_credentials['username'] 
        password = user_credentials['password']
        user = get_registered_user(username, password)

        if user:
            response.meta = {
                'status': 200,
                'message': '',
            }
            response.data = {
                'email': user.email,
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