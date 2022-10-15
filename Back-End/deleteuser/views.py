from django.http import JsonResponse

# Create your views here.
def index(request):
    if request.method == 'POST':
        # do database stuff
        return JsonResponse({
            'status': 200,
        })

    return JsonResponse({
        'status': 400,
    })