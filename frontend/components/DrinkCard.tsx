import Image from 'next/image'

export interface DrinkCardProps {
    name: string,
    portNumber: number | undefined,
    active: boolean,
    onClick: () => void
}

export default function DrinkCard(props: DrinkCardProps) {
    return (
        <div onClick={props.onClick} className="
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
            min-w-full
            lg:min-w-[342px]
            relative
            cursor-pointer
        ">
            { props.portNumber != null &&
                <div className="absolute top-4 left-4 h-[20px] w-[20px]">
                    { props.active &&
                        <Image
                            src={`/images/port-number-${props.portNumber}.svg`}
                            layout="fill"
                            objectFit="scale-down"
                            alt={`Port ${props.portNumber} Icon`}
                        />
                    }
                </div>
            }
            <div className="relative h-[55px] w-[150px]">
                <Image
                    src={`/images/${props.name}.svg`}
                    layout="fill"
                    objectFit="scale-down"
                    alt={`${props.name}`}
                />
            </div>
        </div>
    );
}
