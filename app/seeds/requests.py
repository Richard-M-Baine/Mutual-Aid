from app.models import db, Requests, environment, SCHEMA
from datetime import datetime


def seed_requests():

    request1 = Requests(userID = 1, title = 'ride request to doctors appointment (less than an hour)',start_time = datetime(2022,12,14,11,30), end_time= datetime(2022,12,14,11,30), details='I have a doctors appointment that I need transportation for.  It is located at 123 anystreet Toms River NJ.  It is about 15 minutes from my house.  I live near the corner of route 9 and Church Street. Please message me and I will give you my address.  I am willing to give 10 dollars for gas.', address='ddfgsdfg', city='Manasquan', state='NJ')
    request2 = Requests(userID=2, title='Eatontown grocery pickup', start_time = datetime(2022,12,15,13,30), end_time= datetime(2022,12,15,16,30), details='I cannot afford the fees of instacart.  I was wondering if someone would be able to pick up some groceries if they are going to ShopRite.  I live in The Tanglewood Apartments in Eatontown. My car is disabled. Feel free to message me or text 223-223-1234', address='Tanglewood Apartments', city='Eatontown', state='NJ')
    request3 = Requests(userID=3, title='15 minute drop off for homeless individual.',start_time = datetime(2022,12,15,16,30), end_time= datetime(2022,12,15,17,30), details='We are from Seeds of Service on 1470 Brick Blvd.  Our normal driver is out and I was wondering if someone could drop off some clothes for a houseless individual near the Manaloking Bridge.  They have a cellphone and we can organize a drop off.', address='1470 Brick Blvd', city='Brick Township', state='NJ')


    db.session.add(request1)
    db.session.add(request2)
    db.session.add(request3)

    db.session.commit()



    # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_requests():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.requests RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM requests")
        
    db.session.commit()