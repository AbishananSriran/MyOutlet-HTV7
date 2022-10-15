from math import pi, cos
from bson.objectid import ObjectId
import pymongo
import getpass

from random import randint

pi180 = pi / 180

# ----------------------------------------------------------------------------------------------------------
#  Prerequisites:
#
# 1. An Azure Cosmos DB API for MongoDB Account.
# 2. PyMongo installed.
# ----------------------------------------------------------------------------------------------------------
# Sample - demonstrates the basic CRUD operations on a document in the Azure Cosmos DB API for MongoDB
# ----------------------------------------------------------------------------------------------------------

# CONNECTION_STRING = getpass.getpass(prompt='Enter your primary connection string: ') # Prompts user for connection string
CONNECTION_STRING = 'mongodb://htv7-my-outlet:Yepa5TNc3PtzRfxPeJ4N2FNYjvvbNEd7GIE2ewMFybHskP2xAqbAukThrrvK50lwk0NuOPCDB7F7Ehph7hm6dQ==@htv7-my-outlet.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@htv7-my-outlet@'
DB_NAME = "my-outlet"
# UNSHARDED_COLLECTION_NAME = "my-outlet"
COLLECTION_NAME = "user-info"

SAMPLE_FIELD_NAME = "user-instance"

def delete_document(collection, document_id):
    """Delete the document containing document_id from the collection"""
    collection.delete_one({"_id": document_id})
    print("Deleted document with _id {}".format(document_id))

def read_document(collection, document_id):
    """Return the contents of the document containing document_id"""
    print("Found a document with _id {}: {}".format(document_id, collection.find_one({"_id": document_id})))

def update_document(collection, document_id):
    """Update the sample field value in the document containing document_id"""
    collection.update_one({"_id": document_id}, {"$set":{SAMPLE_FIELD_NAME: "Updated!"}})
    print("Updated document with _id {}: {}".format(document_id, collection.find_one({"_id": document_id})))

def insert_sample_document(collection):
    """Insert a sample document and return the contents of its _id field"""
    document_id = collection.insert_one({SAMPLE_FIELD_NAME: randint(50, 500)}).inserted_id
    print("Inserted document with _id {}".format(document_id))
    return document_id

def insert_user_info(collection, user_info):
    document_id = collection.insert_one(user_info).inserted_id
    return str(document_id)

def get_user_info(collection, user_id):
    return collection.find_one({"_id": ObjectId(user_id)})

def calculate_bounds_lat_long(offset, old_lat, old_long):
    # Offset in meters positive

    # number of km per degree = ~111km (111.32 in google maps, but range varies between 110.567km at the equator and 111.699km at the poles)
    coef = offset / 111.32;
    ncoef = (-1)*coef

    upper_lat = old_lat + coef
    lower_lat = old_lat + ncoef

    # pi / 180 ~= 0.01745
    upper_long = old_long + coef / cos(old_lat * pi180)
    lower_long = old_long + ncoef / cos(old_lat * pi180)
    return upper_lat, upper_long, lower_lat, lower_long

def query_nearby_users(collection, offset, lat, long):
    upper_lat, upper_long, lower_lat, lower_long = calculate_bounds_lat_long(offset, lat, long)

    query = {"latitude": { "$gt": lower_lat, "$lt": upper_lat}, "longitude": { "$gt": lower_long, "$lt": upper_long}}

    res = collection.find(query)

    return res

def delete_user_info(collection, user_id):
    collection.delete_one({"_id": ObjectId(user_id)})




# def create_database_unsharded_collection(client):
#     """Create sample database with shared throughput if it doesn't exist and an unsharded collection"""
#     db = client[DB_NAME]

#     # Create database if it doesn't exist
#     if DB_NAME not in client.list_database_names():
#         # Database with 400 RU throughput that can be shared across the DB's collections
#         db.command({'customAction': "CreateDatabase", 'offerThroughput': 400})
#         print("Created db {} with shared throughput". format(DB_NAME))
    
#     # Create collection if it doesn't exist
#     if UNSHARDED_COLLECTION_NAME not in db.list_collection_names():
#         # Creates a unsharded collection that uses the DBs shared throughput
#         db.command({'customAction': "CreateCollection", 'collection': UNSHARDED_COLLECTION_NAME})
#         print("Created collection {}". format(UNSHARDED_COLLECTION_NAME))
    
#     return db.COLLECTION_NAME

def main():
    """Connect to the API for MongoDB, create DB and collection, perform CRUD operations"""
    client = pymongo.MongoClient(CONNECTION_STRING)
    try:
        client.server_info() # validate connection string
    except pymongo.errors.ServerSelectionTimeoutError:
        raise TimeoutError("Invalid API for MongoDB connection string or timed out when attempting to connect")

    # collection = create_database_unsharded_collection(client)
    # document_id = insert_sample_document(collection)
    
    # read_document(collection, document_id)
    # update_document(collection, document_id)
    # delete_document(collection, document_id)
    db = client[DB_NAME]

    collection = db[COLLECTION_NAME]
    print(collection)
    document_id = insert_sample_document(collection=collection)
    sdocument_id = str(document_id)
    print(document_id, type(document_id))
    read_document(collection, document_id)


if __name__ == '__main__':
    main()
