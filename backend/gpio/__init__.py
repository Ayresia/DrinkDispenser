from config import config
from . import lcd, keypad 

def setup():
    lcd.setup()
    keypad.setup()
