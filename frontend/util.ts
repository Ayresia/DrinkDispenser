import { NotificationType } from "./lib/api"

export function parseDrinkName(drinkName: string) {
    switch (drinkName) {
        case "coca-cola": return "Coca Cola"
        case "sprite": return "Sprite"
        case "kinnie": return "Kinnie"
        case "fanta": return "Fanta"
        case "mountain-dew": return "Mountain Dew"
        case "7up": return "7-Up"
        case "pepsi": return "Pepsi"
        default: return ""
    }
}

export function parseNotificationType(notificationTypeNumber: number) {
    switch (notificationTypeNumber) {
        default: return NotificationType.BOTH
        case 2: return NotificationType.EMAIL
        case 3: return NotificationType.PUSH_NOTIFICATIONS
    }
}
