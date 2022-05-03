from db import models, database
from util import parseNotificationType, getSumTable, getActiveDrinks, getTopFiveDrinks
from . import drink, settings
from starlette.responses import JSONResponse
from starlette.requests import Request
from starlette.routing import Route
from sqlalchemy.schema import Table

async def health(request: Request):
    return JSONResponse({'healthy': True})

async def overview(request: Request):
    # TODO: add total ltrs prop

    drinkTable: Table = models.Drink.__table__

    drinksStmt = drinkTable.select().order_by(models.Drink.total_dispensed.desc())
    drinks = await database.fetch_all(drinksStmt)

    totalDrinksDispensed = getSumTable(drinks)
    topFiveDrinksDispensed = getTopFiveDrinks(drinks)
    activeDrinks = getActiveDrinks(drinks)

    return JSONResponse({
        "totalDrinksDispensed": totalDrinksDispensed,
        "topFiveDrinksDispensed": topFiveDrinksDispensed,
        "activeDrinks": activeDrinks,
    });

routes = [
    Route('/health', endpoint=health),
    Route('/overview', endpoint=overview),
    Route('/drinks', endpoint=drink.fetchAll),
    Route('/drink/edit', endpoint=drink.edit, methods=['POST']),
    Route('/settings', endpoint=settings.fetchAll),
    Route('/settings/edit', endpoint=settings.edit, methods=['POST'])
]
