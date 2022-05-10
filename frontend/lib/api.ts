import axios from "axios";

export interface Settings {
    email?: string,
    apiToken?: string,
    notificationType: number
}

export interface OverviewData {
    activeDrinks: Drink[],
    topFiveDrinksDispensed: Drink[],
    totalDrinksDispensed: string, 
}

export interface Drink {
    id: number,
    name: string
    active: boolean,
    portNumber?: number
    totalDispensed?: number
}

export enum NotificationType {
    BOTH = 1,
    EMAIL = 2,
    PUSH_NOTIFICATIONS = 3
}

export interface SettingsRequest {
    email?: string,
    apiToken?: string,
    notificationType?: number
}

export interface GenericResponse {
    result: boolean
}

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 1000,
})

export async function getRequest<ResponseType>(slug: string) {
    return await client.get<ResponseType>(slug)
        .then(res => res.data)
}

export async function postRequest<ResponseType>(slug: string, data: any) {
    return await client.post<ResponseType>(slug, data)
        .then(res => res.data)
}
