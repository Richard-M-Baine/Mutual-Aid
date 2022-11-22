"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    op.create_table('locations',
    
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(70), nullable=False),
    sa.Column('city', sa.String(70), nullable=False),
    sa.Column('state', sa.String(2), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )


    op.create_table('groups',
    
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column('founder', sa.Integer, nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.Column('about', sa.String(length=2000), nullable=False),
    sa.Column('purpose', sa.String(length=30), nullable=False),
    sa.Column('locationID', sa.Integer, nullable=False),
    sa.Column('private', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['locationID'], ['locations.id']),
    sa.ForeignKeyConstraint(['founder'], ['users.id'] ),
    sa.PrimaryKeyConstraint('id')

    )

    op.create_table('requests',
    
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column('userID', sa.Integer, nullable=False),
    sa.Column('start_time', sa.DateTime(), nullable=False),
    sa.Column('end_time', sa.DateTime(), nullable=False),
    sa.Column('details', sa.String(2000), nullable=False),
    sa.ForeignKeyConstraint(['userID'], ['users.id']),
    sa.PrimaryKeyConstraint('id')
    
    
    )

    op.create_table('messages',
    
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('senderId', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(2000), nullable=False),
    sa.Column('recipientId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['senderId'], ['users.id']),
    sa.PrimaryKeyConstraint('id')
    
    
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###qqqqqqqqq


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('groups')
    op.drop_table('locations')
    op.drop_table('requests')
    op.drop_table('messages')
    # ### end Alembic commands ###