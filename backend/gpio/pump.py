import RPi.GPIO as GPIO
import time

pins = [5, 6, 26]

def dispense(port, secs):
    chosenPort = pins[port - 1]

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(chosenPort, GPIO.OUT)
    GPIO.output(chosenPort, GPIO.HIGH)
    time.sleep(secs)
    GPIO.cleanup(chosenPort)
