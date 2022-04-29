from starlette.responses import JSONResponse
from starlette.requests import Request
from db import models, database
from sqlalchemy.schema import Table
from util import parseNotificationType

import re

async def health(request: Request):
    return JSONResponse({
        'healthy': True
    })

async def drinkEdit(request: Request):
    data = await request.json()

    id: int = data.get('id')
    active: bool = data.get('active')
    portNumber: int = data.get('portNumber')

    if id is None:
        return JSONResponse({ 'error': 'Drink id is required' })

    if active is None and portNumber is None:
        return JSONResponse({ 'error': 'You must provide either active or portNumber property' })

    drinkTable: Table = models.Drink.__table__

    query = drinkTable.select().where(models.Drink.id == id)
    row = await database.fetch_one(query)

    if row is None:
        return JSONResponse({ 'error': 'Invalid drink id' })

    if portNumber is not None and portNumber < 1 or portNumber > 3:
        return JSONResponse({ 'error': 'Port number must be between 1 to 3' })

    query = drinkTable.update().where(models.Drink.id == id).values(active = active, port_number = portNumber)
    await database.execute(query)

    return JSONResponse({ 'result': True })

async def settingsEdit(request: Request):
    data = await request.json()

    notificationType = data.get('notificationType')
    email = data.get('email')
    apiToken = data.get('apiToken')

    if notificationType is None and email is None and apiToken is None:
        return JSONResponse({ 'error': 'You must provide either notificationType, email or apiToken property' })

    settingsTable: Table = models.Setting.__table__
    values = {}

    if notificationType is not None:
        if notificationType not in ["noti-email", "email", "noti"]:
            return JSONResponse({ 'error': 'Invalid notification type' })

        values.update({"notification_type": parseNotificationType(notificationType)})

    if email is None and apiToken is None:
        return JSONResponse({ 'error': 'You must provide either email or apiToken property' })

    if email is not None:
        regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

        if not re.fullmatch(regex, email):
            return JSONResponse({ 'error': 'Invalid email format' })

        values.update({"email_address": email})

    if apiToken is not None:
        values.update({"api_token": apiToken})

    updateStmt = settingsTable.update().values(values)
    await database.execute(updateStmt)

    return JSONResponse({ 'result': True })
