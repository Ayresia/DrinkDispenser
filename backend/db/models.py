from . import Base
from sqlalchemy import Column, ForeignKey
from sqlalchemy.types import Integer, String, Boolean

class Drink(Base):
    __tablename__ = 'drinks'

    id = Column(Integer, primary_key=True)
    name = Column(String(30), nullable=False, unique=True)
    active = Column(Boolean, nullable=False)
    portNumber = Column(Integer, nullable=True)
    totalDispensed = Column(Integer, nullable=False)

class NotificationType(Base):
    __tablename__ = 'notification_types'

    id = Column(Integer, primary_key=True)
    name = Column(String(30), nullable=False)

class Setting(Base):
    __tablename__ = 'settings'

    id = Column(Integer, primary_key=True)
    email = Column(String(255), nullable=True)
    apiToken = Column(String(255), nullable=True)
    notificationType = Column(Integer, ForeignKey("notification_types.id"), nullable=False)
