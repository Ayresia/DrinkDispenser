from starlette.responses import JSONResponse
from starlette.requests import Request
from sqlalchemy.schema import Table
from . import models, database, config

import re

settingsTable: Table = models.Setting.__table__

async def fetchAll(request: Request):
    return JSONResponse(config)

async def edit(request: Request):
    data = await request.json()

    notificationType = data.get("notificationType")
    email = data.get("email")
    apiToken = data.get("apiToken")

    if notificationType is None and email is None and apiToken is None:
        return JSONResponse({"error": "You must provide either notificationType, email or apiToken property"}, status_code=400)

    values = {}

    if notificationType is not None:
        if notificationType not in [1, 2, 3]:
            return JSONResponse({"error": "Invalid notification type"}, status_code=400)

        values.update({"notificationType": notificationType})

    if email is not None:
        regex = re.compile(r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+")

        if not re.fullmatch(regex, email):
            return JSONResponse({"error": "Invalid email format"}, status_code=400)

        values.update({"email": email})

    if apiToken is not None:
        values.update({"apiToken": apiToken})

    updateStmt = settingsTable.update().values(values)
    await database.execute(updateStmt)

    for key, value in values.items():
        if key in config: config[key] = value

    return JSONResponse({"result": True})
