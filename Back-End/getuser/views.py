from django.http import JsonResponse
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

def index(request):
    if request.method == 'GET':
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            collection =  db.get_collection()
            data = db.get_user_info(collection, body['_id'])

            return JsonResponse({
                'status': 200,
                'data': json.loads(data),
            })
        except:
            print('Something went wrong with GET request for /getuser')
        
    return JsonResponse({
        'status': 400,
    })
