import { useState } from "react";
import CardButton from "../components/CardButton";
import MainLayout from "../components/MainLayout";
import MobileNavbar from "../components/MobileNavbar";
import SettingsInput from "../components/SettingsInput";

export enum NotificationType {
    BOTH,
    EMAIL,
    PUSH_NOTIFICATIONS
}

export default function Settings() {
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.BOTH)

    return (
        <MainLayout>
            <main className="flex flex-col gap-[25px] p-7 sm:p-10 text-white overflow-x-hidden w-full mb-28">
                <p className="text-4xl font-bold">Settings</p>
                <div>
                    <p className="text-2xl font-bold pb-5">Notifications</p>
                    <div className="flex flex-col lg:flex-row gap-5 min-h-[127px] overflow-x-scroll">
                        <CardButton 
                            title="Notifications & Email"
                            image="noti_email_icon"
                            imageAlt="Notifications & Email Icon"
                            onClick={() => setNotificationType(NotificationType.BOTH)} 
                            indicator={notificationType === NotificationType.BOTH}
                        />
                        <CardButton
                            title="Email"
                            image="email"
                            imageAlt="Email Icon"
                            onClick={() => setNotificationType(NotificationType.EMAIL)}
                            indicator={notificationType === NotificationType.EMAIL}
                        />
                        <CardButton
                            title="Notifications"
                            image="notifications"
                            imageAlt="Notifications Icon"
                            onClick={() => setNotificationType(NotificationType.PUSH_NOTIFICATIONS)} 
                            indicator={notificationType === NotificationType.PUSH_NOTIFICATIONS}
                        />
                    </div>
                </div>
                { (notificationType === NotificationType.PUSH_NOTIFICATIONS || notificationType == NotificationType.BOTH) &&
                    <SettingsInput
                        title="API Token"
                        description="Receive near real-time push notifications, <>'s API which sends a notification whenever a drink has run out of liquid."
                    />
                }
                { (notificationType === NotificationType.EMAIL || notificationType == NotificationType.BOTH) &&
                    <SettingsInput
                        title="Email Address"
                        description="Receive near real-time email notifications, including day-to-day analytics and whenever a drink has run out of liquid."
                    />
                }
                <MobileNavbar />
            </main>
        </MainLayout>
    )
}
