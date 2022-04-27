from sqlalchemy.ext.declarative import declarative_base
from databases import Database

DATABASE_URL = 'sqlite:///database.db'
database = Database(DATABASE_URL)

Base = declarative_base()
