"""Initial migration

Revision ID: a1def40a74fd
Revises: 
Create Date: 2022-04-26 14:53:25.176479

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a1def40a74fd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('drinks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=False),
    sa.Column('port_number', sa.Integer(), nullable=True),
    sa.Column('total_dispensed', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('notification_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('settings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email_address', sa.String(length=255), nullable=True),
    sa.Column('api_token', sa.String(length=255), nullable=True),
    sa.Column('notification_type', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['notification_type'], ['notification_types.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###

    from db import models

    drink_names = [
        'coca-cola',
        'sprite',
        'kinnie',
        'fanta',
        'mountain-dew',
        '7up',
        'pepsi'
    ]

    for val in drink_names:
        op.bulk_insert(models.Drink.__table__, [
            {
                'name': val,
                'active': False,
                'total_dispensed': 0
            }
        ], multiinsert=False)

    for val in ['noti-email', 'email', 'noti']:
        op.bulk_insert(models.NotificationType.__table__, [
            {
                'name': val,
            }
        ], multiinsert=False)

    op.bulk_insert(models.Setting.__table__, [
        {
            'notification_type': 1
        }, 
    ], multiinsert=False)

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('settings')
    op.drop_table('notification_types')
    op.drop_table('drinks')
    # ### end Alembic commands ###
