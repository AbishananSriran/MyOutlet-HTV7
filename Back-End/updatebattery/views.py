from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

@csrf_exempt
def index(request):
    if request.method == 'POST':
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            collection = db.get_collection()
            userid = db.insert_user_info(collection, body['_id'], body['battery-level'])
            return JsonResponse({
                'status': 200,
                '_id': userid,
            })
        except:
            print('Something went wrong with POST request for /updatebattery')
        
    return JsonResponse({
        'status': 400,
    })
