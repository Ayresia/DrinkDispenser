from i2clcd import i2clcd
from . import config
from util import parseDrinkName
import time

lcdInstance = i2clcd(i2c_bus=1, i2c_addr=0x27, lcd_width=16)

def setup():
    lcdInstance.init()
    displayMainMenu() 

def displayMainMenu():
    lcdInstance.clear()
    lcdInstance.print_line("DrinkDispenser", line=0, align='CENTER')
    lcdInstance.print_line("# for all drinks", line=1, align='CENTER')

def displayDrinkNotExist():
    lcdInstance.clear()
    lcdInstance.print_line("Drink", line=0, align='CENTER')
    lcdInstance.print_line("does not exist", line=1, align='CENTER')

def displayDrinkDispensed(name):
    lcdInstance.clear()
    lcdInstance.print_line("Dispensing", line=0, align='CENTER')
    lcdInstance.print_line(name, line=1, align='CENTER')

def displayAllDrinks():
    config["isDispensed"] = True
    activeDrinks = config["activeDrinks"]

    for drink in activeDrinks:
        lcdInstance.clear()
        lcdInstance.print_line(parseDrinkName(drink["name"]), line=0, align='CENTER')
        lcdInstance.print_line("00" + str(drink["portNumber"]), line=1, align='CENTER')
        time.sleep(2)

    config["isDispensed"] = False
    displayMainMenu()
