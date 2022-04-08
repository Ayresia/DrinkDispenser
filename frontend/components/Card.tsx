export interface CardProps {
    title?: string,
    image?: string
    value?: string 
}

export default function Card(props: CardProps) {
    return (
        <div className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            rounded-[20px]
            sm:gap-2
            border-[1px]
            border-[#C3C3C3]
            border-opacity-50
            bg-white
            bg-opacity-20
            p-3
            min-h-[85px]
            min-w-[225px]
        ">
            { props.title && <p className="font-semibold lg:text-lg">{props.title}</p> }
            { props.image && <img src={`./images/${props.image}.svg`} className="max-h-[30px]" /> }
            { props.value && <p className="font-extrabold text-xl lg:text-3xl">{props.value}</p> }
        </div>
    );
}
