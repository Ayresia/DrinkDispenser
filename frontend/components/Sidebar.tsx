import SidebarButton from "./SidebarButton";

export default function Sidebar() {
    return (
        <aside className="flex flex-col w-fit gap-10 border-r-2 border-r-white border-opacity-[11%] p-10 h-full">
            <img 
                src="images/logo.svg"
                alt="Drink Dispenser Logo"
                className="h-16"
            />
            <SidebarButton name="Dashboard" href="/" />
            <SidebarButton name="Drinks" href="/drinks" />
            <SidebarButton name="Settings" href="/settings" />
        </aside>
    );
}
