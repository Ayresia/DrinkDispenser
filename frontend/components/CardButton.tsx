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
            lg:flex-col
            items-center
            lg:justify-center
            pl-5
            lg:pl-0
            rounded-[20px]
            gap-5
            lg:gap-2
            border-[1px]
            border-[#C3C3C3]
            border-opacity-50
            bg-white
            bg-opacity-20
            h-16
            lg:h-auto
            min-w-[210px]
            relative
            `}
            onClick={props.onClick}
        >
            <div className={`
                block
                lg:absolute
                lg:top-4
                lg:left-4
                w-[12px]
                h-[12px]
                before:content-['']
                rounded-lg
                ${ props.indicator && "bg-[#4CC896]" }
                ${ props.indicator && "shadow-[0_0_15px_#4CC896]" }
                `}
            />
            <div className="flex flex-col gap-3 pt-0 lg:pt-3">
                <img src={`./images/${props.image}.svg`} className="hidden lg:block max-h-[25px]" />
                <p className="font-semibold">{props.title}</p>
            </div>
        </button>
    );
}
