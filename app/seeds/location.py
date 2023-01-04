from app.models import db, Locations, environment, SCHEMA
from datetime import date


def seed_locations():

    location1 = Locations(address='725 Mantoloking Road', city='Brick', state='NJ')#lat=40.049568, lng=-74.11982949999999)
    location2 = Locations(address='Clifton ave & 3rd Street', city='Lakewood', state='NJ')#, lat=40.09312, lng=-74.214796 )
    location3 = Locations(address='1769 Hooper Ave', city='Toms River', state='NJ')#, lat=40.007864, lng=-74.147209 )


    db.session.add(location1)
    db.session.add(location2)
    db.session.add(location3)

    db.session.commit()



    # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_locations():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.locations RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM locations")
        
    db.session.commit()