from sqlalchemy.schema import Table
from db import models, database

config = {
    "email": "",
    "apiToken": "",
    "notificationType": 1,
    "isDispensed": False
}

settingsTable: Table = models.Setting.__table__

async def fetch():
    global email, apiToken, notificationType

    stmt = settingsTable.select()
    row = await database.fetch_one(stmt)

    config["email"] = row["email"]
    config["apiToken"] = row["apiToken"]
    config["notificationType"] = row["notificationType"]
