import SidebarButton from "./SidebarButton";
import DashboardLogo from "../public/images/dashboard.svg";
import DrinksLogo from "../public/images/drinks.svg";
import SettingsLogo from "../public/images/settings.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Sidebar() {
    const [page, setPage] = useState<string>("");

    useEffect(() => {
        setPage(window.__NEXT_DATA__.page)
    }, [])

    return (
        <aside className="overflow-auto hidden lg:flex flex-col w-fit gap-10 border-r-2 border-r-white border-opacity-[11%] p-10 h-full shadow-[0_0_45px_5px_rgba(0,0,0,0.2)]">
            <Image
                src="/images/logo.svg"
                alt="Drink Dispenser Logo"
                height={65}
                width={180}
            />
            <SidebarButton name="Dashboard" logo={DashboardLogo} logoAlt="Dashboard" page={page} href="/" />
            <SidebarButton name="Drinks" logo={DrinksLogo} logoAlt="Drinks" page={page} href="/drinks" />
            <SidebarButton name="Settings" logo={SettingsLogo} logoAlt="Settings" page={page} href="/settings" />
        </aside>
    );
}
