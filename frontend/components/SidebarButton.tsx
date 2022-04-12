export interface SidebarButtonProps {
    name?: string,
    href: string,
    page: string,
    logo: any,
}

export default function SidebarButton(props: SidebarButtonProps) {
    return (
        <a 
            href={props.href}
            className={`flex gap-4 items-center ${props.page === props.href ? "sidebar-button" : "sidebar-button-inactive transition duration-200 ease-in-out"}`}
        >
            <props.logo className="button-icon" />
            {props.name}
        </a>
    );
}
