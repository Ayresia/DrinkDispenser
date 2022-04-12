import Button, { ButtonVariant } from "./Button";
import { DrinkName } from "./DrinkCard";
import Dropdown from "./Dropdown";
import Image from "next/image";

export interface EditDrinkCardProps {
    name: DrinkName,
    portNumber: number | null,
    elemRef: any
}

export default function EditDrinkCard(props: EditDrinkCardProps) {
    let options = ["Item1", "Item2", "Item3"]

    return (
        <div ref={props.elemRef} className="
            flex
            flex-col
            rounded-[20px]
            gap-5
            border-[1px]
            border-[#C3C3C3]
            border-opacity-50
            bg-[#000000]
            bg-opacity-[12%]
            p-5
            w-[20rem]
            h-fit
            sm:w-[32rem]
            relative
        ">
            { props.portNumber != null &&
                <div className="relative flex h-[20px] w-[20px]">
                    <Image 
                        src={`/images/port-number-${props.portNumber}.svg`}
                        alt={`Port Number ${props.portNumber}`}
                        layout="fill"
                        objectFit="scale-down"
                    />
                </div>
            }
            <div className="flex justify-between items-center">
                <div className="relative h-[30px] w-[90px] md:w-[95px]">
                    <Image
                        src={`/images/${props.name}.svg`}
                        alt={`${props.name}`}
                        layout="fill"
                        objectFit="scale-down"
                    />
                </div>
                <Button variant={ButtonVariant.Disable} />
            </div>
            <div className="before:content-[''] bg-[#CDCDCD] bg-opacity-30 w-full h-[2px]" />
            <Dropdown name="Drink" defaultValue={options[0]} options={options} />
            <Dropdown name="Port" defaultValue="1" options={["1", "2", "3"]} />
            <Button variant={ButtonVariant.Confirm} />
        </div>
    );
}
