from starlette.responses import JSONResponse
from starlette.requests import Request
from db import models, database
from sqlalchemy.schema import Table

async def health(request: Request):
    return JSONResponse({
        'healthy': True
    })

async def edit(request: Request):
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