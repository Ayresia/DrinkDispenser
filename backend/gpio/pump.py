import RPi.GPIO as GPIO
import time
from sqlalchemy.schema import Table
from db import models, database

pins = [38, 31, 37]

drinkTable: Table = models.Drink.__table__

async def dispense(port, internalName, secs):
    chosenPort = pins[port - 1]

    GPIO.setup(chosenPort, GPIO.OUT)
    GPIO.output(chosenPort, GPIO.HIGH)
    time.sleep(secs)
    GPIO.cleanup(chosenPort)

    queryDrink = drinkTable.select().where(models.Drink.id == id)
    rowDrink: models.Drink.__table__ = await database.fetch_one(queryDrink)

    updateQuery = drinkTable.update().where(models.Drink.name == internalName).values({
        "totalDispensed": rowDrink.totalDispensed + 1
    })

    await database.execute(updateQuery)
