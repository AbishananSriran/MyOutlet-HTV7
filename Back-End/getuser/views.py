from django.http import JsonResponse
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

def index(request):
    if request.method == 'GET':
        collection =  db.get_collection()
        try:
            data = db.get_user_info(collection, request.GET.__getitem__('_id'))

            return JsonResponse({
                'status': 200,
                'data': json.loads(data),
            })
        except:
            print('Something went wrong with GET request for /getuser')
        
    return JsonResponse({
        'status': 400,
    })
