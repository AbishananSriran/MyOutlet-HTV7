from django.http import JsonResponse
import json
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

DEFAULT_OFFSET = 100

def index(request):
    if request.method == 'GET':
        try:
            lat = request.GET.__getitem__('lat')
            long = request.GET.__getitem__('long')

            collection = db.get_collection()
            data = db.query_nearby_users(collection, DEFAULT_OFFSET, lat, long)
            return JsonResponse({
                'status': 200,
                'data': json.loads(data),
            })
        except:
            print("Something went wrong with GET request for /nearbyusers")
        
    return JsonResponse({
        'status': 400,
    })
