from config import config
from . import simplepush

def sendNotification(title, message, event):
    notificationType = config["notificationType"]

    match notificationType:
        case 1: 
            simplepush.send_notification(title, message, event)
            # TODO: Send email alerts
            return
        case 2:
            # TODO: Send email alerts
            return
        case 3:
            simplepush.send_notification(title, message, event)
            return