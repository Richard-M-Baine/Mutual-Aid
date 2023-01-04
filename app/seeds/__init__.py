from flask.cli import AppGroup
from .users import seed_users, undo_users

# my imports

from .groups import seed_groups, undo_groups
from .location import seed_locations,  undo_locations
from .requests import seed_requests, undo_requests
from .messages import seed_messages, undo_messages


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.locations RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.groups RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.requests RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()   
    seed_users()
    seed_locations()
    seed_groups()
    seed_requests()
    seed_messages()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_requests()
    undo_locations()
    undo_groups()
    undo_messages()
    undo_users()
    
    
    
    # Add other undo functions here