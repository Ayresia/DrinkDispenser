import Head from "next/head";
import { useEffect, useState } from "react";
import Button, { ButtonVariant } from "../components/Button";
import CardButton from "../components/CardButton";
import LoadingSpinner from "../components/LoadingSpinner";
import MainLayout from "../components/MainLayout";
import MobileNavbar from "../components/MobileNavbar";
import SettingsInput from "../components/SettingsInput";
import { GenericResponse, getRequest, NotificationType, postRequest, Settings as SettingsResponse, SettingsRequest } from "../lib/api";
import { parseNotificationType } from "../util";

export default function Settings() {
    const [data, setData] = useState<SettingsResponse>()
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.BOTH)
    const [email, setEmail] = useState<string>("")
    const [apiToken, setApiToken] = useState<string>("")

    useEffect(() => {
        getRequest<SettingsResponse>("/settings")
            .then((data: SettingsResponse) => {
                setData(data)
                setEmail(data.email! ?? data.email)
                setApiToken(data.apiToken! ?? data.apiToken)
                setNotificationType(parseNotificationType(data.notificationType))
            })
            .catch(_ => {})
    }, [])

    const onSaveButton = () => {
        let reqData: SettingsRequest = {}

        if (email != data?.email) reqData.email = email
        if (apiToken != data?.apiToken) reqData.apiToken = apiToken
        if (notificationType != data?.notificationType) reqData.notificationType = notificationType
        if (Object.keys(reqData).length == 0) return

        postRequest<GenericResponse>("/settings/edit", reqData)
            .then((_data: GenericResponse) => {
                setData(prevState => {
                    if (prevState?.email != undefined) prevState.email = email
                    if (prevState?.apiToken != undefined) prevState.apiToken = apiToken

                    return prevState
                })
            })
            .catch(_ => {})
    }

    return (
        <>
            <Head>
                <title>DrinkDispenser - Settings</title>
            </Head>
            <MainLayout>
                { !data && 
                    <div className="flex justify-center items-center h-full w-full">
                        <LoadingSpinner />
                        <MobileNavbar />
                    </div>
                }
                { data &&
                    <main className="flex flex-col gap-[25px] p-7 sm:p-10 text-white overflow-x-hidden w-full mb-28 lg:mb-0 h-auto sm:h-fit lg:h-full">
                        <p className="text-4xl font-bold mr-auto">Settings</p>
                        <div>
                            <p className="text-2xl font-bold pb-5">Notifications</p>
                            <div className="flex flex-col lg:flex-row gap-5 min-h-[127px] overflow-x-auto">
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
                                description="Receive near real-time push notifications, Simplepush's API which sends a notification whenever a drink is being dispensed."
                                setValue={setApiToken}
                                value={apiToken}
                            />
                        }
                        { (notificationType === NotificationType.EMAIL || notificationType == NotificationType.BOTH) &&
                            <SettingsInput
                                title="Email Address"
                                description="Receive near real-time email notifications, including day-to-day analytics and whenever a drink has run out of liquid."
                                setValue={setEmail}
                                value={email}
                            />
                        }
                        <div className="flex flex-row-reverse mt-auto">
                            <Button onClick={onSaveButton} variant={ButtonVariant.Confirm}>Save</Button>
                        </div>
                        <MobileNavbar />
                    </main>
                }
            </MainLayout>
        </>
    )
}
