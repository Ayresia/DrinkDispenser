import RPi.GPIO as GPIO
import time

pins = [29, 31, 37]

def dispense(port, secs):
    chosenPort = pins[port - 1]

    GPIO.setup(chosenPort, GPIO.OUT)
    GPIO.output(chosenPort, GPIO.HIGH)
    time.sleep(secs)
    GPIO.cleanup(chosenPort)
