from . import config

import simplepush

def send_notification(title, message, event):
    apiToken = config["apiToken"]

    if apiToken:
        simplepush.send(config["apiToken"], title, message, event)
