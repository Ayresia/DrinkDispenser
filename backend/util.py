def parseNotificationType(notificationType):
    match notificationType:
        case "noti-email", _:
            return 1
        case "email":
            return 2
        case "noti":
            return 3

def getSumTable(rows):
    total = 0

    for row in rows:
        total += row[4]

    return total

def getActiveDrinks(rows):
    result = []

    for row in rows:
        if row[2]:
            result.append(dict(id=row[0], name=row[1]))

    return result

def getTopFiveDrinks(rows):
    result = []

    for row in rows[:5]:
        result.append(dict(
            id=row[0],
            name=row[1],
            totalDispensed=row[4]
        ))

    return result
