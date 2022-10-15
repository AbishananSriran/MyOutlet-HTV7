from django.http import JsonResponse
import re
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

# Create your views here.
def index(request):
    if request.method == 'POST':
        # do database stuff
        try:
            collection = db.get_collection()
            db.delete_document(collection, request.POST.__getitem__('_id'))
            return JsonResponse({
                'status': 200,
            })
        except:
            print("Something went wrong with POST request for /deleteuser")


    return JsonResponse({
        'status': 400,
    })