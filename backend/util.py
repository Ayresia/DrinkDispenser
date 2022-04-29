def parseNotificationType(notificationType):
    match notificationType:
        case "noti-email", _:
            return 1
        case "email":
            return 2
        case "noti":
            return 3
