export interface SidebarButtonProps {
    name: string,
    href: string,
}

export default function SidebarButton(props: SidebarButtonProps) {
    let iconNameLower = props.name.toLowerCase()

    return (
        <a 
            href={props.href}
            className="flex gap-4 items-center text-white font-medium"
        >
            <img
                src={`images/${iconNameLower}.svg`}
                alt={`${props.name} icon`}
            />
            {props.name}
        </a>
    );
}
