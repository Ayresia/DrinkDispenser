from config import config
from . import simplepush, gmail

gmailClient = gmail.Client()

def sendNotification(title, message, event):
    notificationType = config["notificationType"]
    emailTo = config["email"]

    try:
        match notificationType:
            case 1: 
                simplepush.send_notification(title, message, event)
                gmailClient.sendEmail(emailTo, title, message)
            case 2:
                gmailClient.sendEmail(emailTo, title, message)
            case 3:
                simplepush.send_notification(title, message, event)
    except Exception as e:
        print("Unable to send notification - ", e)
