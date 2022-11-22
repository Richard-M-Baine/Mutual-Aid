from app.models import db, Groups, environment, SCHEMA
from datetime import date


def seed_groups():

    group1 = Groups(founder=1, name='Seeds of Service', about='Drop In food pantry.  Also offer help regarding clothing, household goods, and housing assistance.', purpose='youth and family assistance', locationID=1, private=True)
    group2 = Groups(founder=2, name='Food Not Bombs Lakewood', about='popup food pantry, fresh produce, and usually clothing.  Every friday at six', purpose='food assistance', locationID=2, private=False)
    group3 = Groups(founder=3, name="The People's Pantry", about='a food pantry resembling a supermarket ', purpose='food assistance', locationID=3, private=True)


    db.session.add(group1)
    db.session.add(group2)
    db.session.add(group3)

    db.session.commit()



    # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_groups():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.lists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM lists")
        
    db.session.commit()