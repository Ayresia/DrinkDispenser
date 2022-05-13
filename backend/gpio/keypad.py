from pad4pi import rpi_gpio
from RPi.GPIO import BOARD as gpioBoard
from .lcd import displayDrinkNotExist, displayDrinkDispensed, lcdInstance as lcd
from . import config
from util import parseDrinkName

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

    if key == "*" and len(buffer) != 0:
        buffer = ""
    else:
        buffer += key

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

            # TODO: add pump logic
            time.sleep(30) # TODO: adjust dispense interval

    buffer = ""

    if not config["isDispensed"]:
        displayDrinkNotExist()
        time.sleep(5)
    else:
        config["isDispensed"] = False

    lcd.clear()
    lcd.print_line("DrinkDispenser", line=0, align='CENTER')
            
def setup():
    factory = rpi_gpio.KeypadFactory()
    keypad = factory.create_keypad(
        keypad = layout,
        row_pins = rowPins,
        col_pins = colPins,
        gpio_mode = gpioBoard
    )

    keypad.registerKeyPressHandler(_onKeyPressed)
