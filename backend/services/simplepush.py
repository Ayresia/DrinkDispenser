from . import config

import simplepush

def send_notification(title, message, event):
    apiToken = config["apiToken"]

    if len(apiToken) != 0:
        simplepush.send(config["apiToken"], title, message, event)
