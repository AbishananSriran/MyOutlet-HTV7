from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

@csrf_exempt
def index(request):
    print('ok')
    if request.method == 'POST':
        print('ok')
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            print(body)
            collection = db.get_collection()
            db.update_user_battery(collection, body['_id'], body['battery-level'])
            return JsonResponse({
                'status': 200,
            })
        except:
            print('Something went wrong with POST request for /updatebattery')
        
    return JsonResponse({
        'status': 400,
    })
