def getSumTable(rows):
    total = 0

    for row in rows:
        total += row[4]

    return total

def getActiveDrinks(rows):
    result = []

    for row in rows:
        if row[2]:
            result.append(dict(
                id=row[0],
                name=row[1],
                portNumber=row[3]
            ))

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

def parseDrinkName(drink):
    match drink:
        case "coca-cola": return "Coca Cola"
        case "sprite": return "Sprite"
        case "kinnie": return "Kinnie"
        case "fanta": return "Fanta"
        case "mountain-dew": return "Mountain Dew"
        case "7up": return "7-Up"
        case "pepsi": return "Pepsi"
        case _: ""
