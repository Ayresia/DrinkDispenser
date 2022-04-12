import SidebarButton from "./SidebarButton";
import DashboardLogo from "../public/images/dashboard.svg";
import DrinksLogo from "../public/images/drinks.svg";
import SettingsLogo from "../public/images/settings.svg";
import { useEffect, useState } from "react";

export default function MobileNavbar() {
    const [page, setPage] = useState<string>("");

    useEffect(() => {
        setPage(window.__NEXT_DATA__.page)
    }, [])

    return (
        <div className="flex lg:hidden self-center fixed bottom-16 w-fit gap-[50px] rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] px-10 py-5 shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
            <SidebarButton logo={DashboardLogo} logoAlt="Dashboard" page={page} href="/" />
            <SidebarButton logo={DrinksLogo} logoAlt="Drinks" page={page} href="/drinks" />
            <SidebarButton logo={SettingsLogo} logoAlt="Settings" page={page} href="/settings" />
        </div>
    );
}
