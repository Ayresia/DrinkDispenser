export interface OverviewCard {
    title: string,
    image?: string
    value?: string 
}

export default function OverviewCard(props: OverviewCard) {
    return (
        <div className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            rounded-[20px]
            gap-2
            border-[1px]
            border-[#C3C3C3]
            bg-white
            bg-opacity-20
            p-5
            h-[100px]
            w-[225px]
        ">
            <p className="font-semibold lg:text-lg">{props.title}</p>
            { props.image && <img src={`./images/${props.image}.svg`} className="w-[100px] lg:w-[120px]" /> }
            { props.value && <p className="font-extrabold text-xl lg:text-3xl">{props.value}</p> }
        </div>
    );
}
