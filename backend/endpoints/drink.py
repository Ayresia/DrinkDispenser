from starlette.responses import JSONResponse
from starlette.requests import Request
from sqlalchemy.schema import Table
from . import models, database

drinkTable: Table = models.Drink.__table__

async def fetchAll(request: Request):
    stmt = drinkTable.select()
    rows = await database.fetch_all(stmt)
    serializedResult = [row._asdict() for row in rows]

    return JSONResponse(serializedResult)

async def edit(request: Request):
    data = await request.json()

    id: int = data.get("id")
    active: bool = data.get("active")
    portNumber: int = data.get("portNumber")

    if id is None:
        return JSONResponse({"error": "Drink id is required"})

    if active is None and portNumber is None:
        return JSONResponse({"error": "You must provide either active or portNumber property"})

    query = drinkTable.select().where(models.Drink.id == id)
    row = await database.fetch_one(query)

    if row is None:
        return JSONResponse({"error": "Invalid drink id"})

    values = {}

    if portNumber is not None and portNumber < 1 or portNumber > 3:
        if portNumber < 1 or portNumber > 3:
            return JSONResponse({"error": "Port number must be between 1 to 3" })

        values.update({"port_number": portNumber})

    if active is not None:
        values.update({"active": active})
        
    query = drinkTable.update().where(models.Drink.id == id).values(values)
    await database.execute(query)

    return JSONResponse({"result": True })
