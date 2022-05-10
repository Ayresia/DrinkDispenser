export enum ButtonVariant {
    Disable,
    Confirm
}

export interface ButtonProps {
    variant: ButtonVariant,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void, 
    children?: any
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`
            ${ props.variant === ButtonVariant.Disable ?
                "bg-[#FF453A]" : "bg-[#82FF63]"
            }
            
            ${ props.variant === ButtonVariant.Disable ?
                "border-[#FF453A]" : "border-[#82FF63]"
            }
            ${ props.variant === ButtonVariant.Disable ?
                "text-[#FF6C63]" : "text-[#82FF63]"
            }
            h-fit
            w-fit
            bg-opacity-20
            border-[1px]
            border-opacity-40
            px-6
            py-[4px]
            lg:px-4
            lg:py-[2px]
            rounded-[10px]
            font-bold
        `}>
            { props.children !== undefined ? 
                props.children :
                props.variant === ButtonVariant.Disable ? "Disable" : "Confirm" 
            }
        </button>
    );
}
