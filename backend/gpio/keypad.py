from gpio import pump
from pad4pi import rpi_gpio
from RPi.GPIO import BOARD as gpioBoard
from .lcd import displayDrinkNotExist, displayDrinkDispensed, displayAllDrinks, displayMainMenu, lcdInstance as lcd
from . import config
from util import parseDrinkName
from services import sendNotification

import time

layout = [
    ["1", "2", "3", "A"],
    ["4", "5", "6", "B"],
    ["7", "8", "9", "C"],
    ["*", "0", "#", "D"]
]

rowPins = [12, 16, 18, 22]
colPins = [19, 15, 13, 11]
buffer = ""

def _onKeyPressed(key):
    global buffer

    if config["isDispensed"]: return

    match key:
        case "*": 
            if len(buffer) > 0:
                buffer = ""
        case "#": 
            displayAllDrinks()
            return
        case _: buffer += key

    if len(buffer) != 3:
        lcd.print_line(buffer, line=1, align="CENTER")
        return

    activeDrinks = config["activeDrinks"]

    for drink in activeDrinks:
        name = drink["name"]
        portNumber = drink["portNumber"]

        if buffer[2] == str(portNumber) and buffer[:2] == "00":
            displayDrinkDispensed(parseDrinkName(name))
            config["isDispensed"] = True
            sendNotification(
                f"Drink Dispensed - {parseDrinkName(name)}",
                f"{parseDrinkName(name)} is being dispensed at the moment.",
                "DRINK_DISPENSED"
            )

            pump.dispense(int(buffer[2]), 2)

    buffer = ""

    if not config["isDispensed"]:
        displayDrinkNotExist()
        time.sleep(5)
    else:
        config["isDispensed"] = False

    displayMainMenu()
            
def setup():
    factory = rpi_gpio.KeypadFactory()
    keypad = factory.create_keypad(
        keypad = layout,
        row_pins = rowPins,
        col_pins = colPins,
        gpio_mode = gpioBoard
    )

    keypad.registerKeyPressHandler(_onKeyPressed)
