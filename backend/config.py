from sqlalchemy.schema import Table
from db import models, database
from util import getActiveDrinks

config = {
    "email": "",
    "apiToken": "",
    "notificationType": 1,
    "isDispensed": False,
    "activeDrinks": []
}

settingsTable: Table = models.Setting.__table__
drinkTable: Table = models.Drink.__table__

async def fetch():
    global email, apiToken, notificationType

    stmt = settingsTable.select()
    row = await database.fetch_one(stmt)

    config["email"] = row["email"]
    config["apiToken"] = row["apiToken"]
    config["notificationType"] = row["notificationType"]

    drinksStmt = drinkTable.select().order_by(models.Drink.totalDispensed.desc())
    drinks = await database.fetch_all(drinksStmt)

    config["activeDrinks"] = getActiveDrinks(drinks)
