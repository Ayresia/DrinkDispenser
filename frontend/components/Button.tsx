export enum ButtonVariant {
    Disable,
    Confirm
}

export interface ButtonProps {
    variant: ButtonVariant
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            ${ props.variant === ButtonVariant.Disable ?
                "bg-[#FF453A]" : "bg-[#82FF63]"
            }
            
            ${ props.variant === ButtonVariant.Disable ?
                "border-[#FF453A]" : "border-[#82FF63]"
            }
            ${ props.variant === ButtonVariant.Disable ?
                "text-[#FF6C63]" : "text-[#82FF63]"
            }
            w-fit
            bg-opacity-20
            border-[1px]
            border-opacity-40
            px-4
            py-[2px]
            rounded-[10px]
            font-bold
        `}>
            { props.variant === ButtonVariant.Disable ?
                "Disable" : "Confirm"
            }
        </button>
    );
}
