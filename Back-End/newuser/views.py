from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

USER_TEMPLATE = ['name', 'image', 'latitude', 'longitude', 'battery-level']

@csrf_exempt
def index(request):
    if request.method == 'POST':
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            success = True

            for key in USER_TEMPLATE:
                if body.get(key) == None:
                    success = False
                    break

            if success:
                collection = db.get_collection()
                userid = db.insert_user_info(collection, body)
                return JsonResponse({
                    'status': 200,
                    '_id': userid,
                })
        except:
            print('Something went wrong with POST request for /newuser')
        
    return JsonResponse({
        'status': 400,
    })
