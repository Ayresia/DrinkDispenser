import SidebarButton from "./SidebarButton";
import DashboardLogo from "../public/images/dashboard.svg";
import DrinksLogo from "../public/images/drinks.svg";
import SettingsLogo from "../public/images/settings.svg";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [page, setPage] = useState<string>("");

    useEffect(() => {
        setPage(window.__NEXT_DATA__.page)
    }, [])

    return (
        <aside className="flex flex-col w-fit gap-10 border-r-2 border-r-white border-opacity-[11%] p-10 h-full">
            <img 
                src="images/logo.svg"
                alt="Drink Dispenser Logo"
                className="h-16"
            />
            <SidebarButton name="Dashboard" logo={DashboardLogo} page={page} href="/" />
            <SidebarButton name="Drinks" logo={DrinksLogo} page={page} href="/drinks" />
            <SidebarButton name="Settings" logo={SettingsLogo} page={page} href="/settings" />
        </aside>
    );
}
