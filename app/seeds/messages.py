from app.models import db, Messages, environment, SCHEMA

def seed_messages():

    message1 = Messages(sender = 'bilbo1409', body = 'That would be no problem.  My phone number is 123-45-6789.  I will text you around three to confirm.', recipient = 'second', read = False)
    message2 = Messages(sender = 'second', body = 'that would be perfect thank you! my apartment number is 128 in the back across from the playground.  Just text or call when you are nearby and I will guide you to where I am.', recipient = 'bilbo1409', read = False)
    message3 = Messages(sender = 'third', body = 'Hey its kind of an emergency Bilbo.  Remember Paul?  Is there anyway you can drop this off?  He doesnt trust anybody but you we will give you 20 dollars for your trouble.', recipient = 'bilbo1409', read = False)


    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)

    db.session.commit()

        # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.requests RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM requests")
        
    db.session.commit()