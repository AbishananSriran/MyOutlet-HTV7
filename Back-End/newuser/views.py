from django.http import JsonResponse

def index(request):
    if request.method == 'POST':
        postData = request.POST
        # do database stuffs

        return JsonResponse({
            'status': 200,
        })
        
    return JsonResponse({
        'status': 400,
    })
