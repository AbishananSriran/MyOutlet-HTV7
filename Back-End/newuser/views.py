from django.http import JsonResponse
import sys
sys.path.append('../../')
import myoutlet.db_ops.db as db

USER_TEMPLATE = ['name', 'image', 'latitude', 'longitude', 'battery-level']

def index(request):
    if request.method == 'POST':
        postData = request.POST.dict()
        success = True

        for key in USER_TEMPLATE:
            if postData.get(key) != None:
                success = False
                break

        if success:
            try:
                collection = db.get_collection()
                userid = db.insert_user_info(collection)
                return JsonResponse({
                    'status': 200,
                    '_id': userid,
                })
            except:
                print('Something went wrong with POST request for /newuser')
        
    return JsonResponse({
        'status': 400,
    })
