export enum DrinkName {
    CocaCola = "coca-cola",
    Sprite = "sprite",
    Kinnie = "kinnie",
    Fanta = "fanta",
    MountainDew = "mountain-dew",
    SevenUp = "7up",
    Pepsi = "pepsi"
}

export interface DrinkCardProps {
    name: DrinkName,
    portNumber: 1 | 2 | 3 | null
}

export default function DrinkCard(props: DrinkCardProps) {
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
            min-h-[120px]
            min-w-[300px]
            relative
        ">
            { props.portNumber !== null &&
                <img 
                    src={`./images/port-number-${props.portNumber}.svg`}
                    className="absolute top-2 left-2 max-h-[20px]"
                    alt={`Port Number ${props.portNumber}`}
                />
            }
            <img
                src={`./images/${props.name}.svg`}
                className="max-h-[55px]"
                alt={`${props.name}`}
            />
        </div>
    );
}
