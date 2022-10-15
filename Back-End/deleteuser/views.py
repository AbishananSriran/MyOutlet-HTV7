from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

# Create your views here.
@csrf_exempt
def index(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        # do database stuff
        try:
            collection = db.get_collection()
            db.delete_document(collection, body['_id'])
            return JsonResponse({
                'status': 200,
            })
        except:
            print("Something went wrong with POST request for /deleteuser")


    return JsonResponse({
        'status': 400,
    })