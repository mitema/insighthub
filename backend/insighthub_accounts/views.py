from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .supabase_client import supabase
from django.contrib.auth import get_user_model
import json

User = get_user_model()

@csrf_exempt
def register(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=400)

    # = request.POST.get("email") 
    #password = request.POST.get("password")

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonRespsonse({"error":"Invalid JSON"}, status=400)

    email=data.get('email')
    password=data.get('password')

    
    if not email or not password:
        return JsonResponse({"error": "Email and password are required"}, status=400)
    
    user, created = User.objects.get_or_create(
        email=email,
        defaults={"username": email}
    )

    if created:
        user.set_password(password)
        user.save()
        return JsonResponse({"message":"User created"}, status=201)
    
    return JsonResponse(
        {"message":"User already exists"},
        status=200
    )

    
    response = supabase.table("insighthub_accounts_user").select("*").eq("email", email).execute()

    if response.data:
        return JsonResponse({"exists": True, "user": response["data"][0]})
    else:
        return JsonResponse({"exists": False})
