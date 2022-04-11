import { MouseEvent } from "react";

export interface CardButtonProps {
    title: string,
    indicator?: boolean,
    image: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function CardButton(props: CardButtonProps) {
    return (
        <button className={`
            flex
            flex-col
            justify-center
            rounded-[20px]
            gap-2
            border-[1px]
            border-[#C3C3C3]
            border-opacity-50
            bg-white
            bg-opacity-20
            min-w-[210px]
            relative
            `}
            onClick={props.onClick}
        >
            { props.indicator &&
                <div className="
                    absolute
                    top-4
                    left-4
                    w-[12px]
                    h-[12px]
                    before:content-['']
                    bg-[#4CC896]
                    rounded-lg
                    shadow-[0_0_15px_#4CC896]
                    "
                />
            }
            <div className="flex flex-col gap-3 pt-3">
                <img src={`./images/${props.image}.svg`} className="max-h-[25px]" />
                <p className="font-semibold">{props.title}</p>
            </div>
        </button>
    );
}
