import Button, { ButtonVariant } from "./Button";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { Drink, postRequest } from "../lib/api";
import { Dispatch, RefObject, SetStateAction, useState } from "react";

export interface EditDrinkCardProps {
    drink: Drink,
    drinks: Drink[],
    elemRef: RefObject<HTMLDivElement>,
    setModalState: Dispatch<SetStateAction<boolean>>
}

export default function EditDrinkCard(props: EditDrinkCardProps) {
    const [status, setStatus] = useState(props.drink.active)
    const [currentPort, setCurrentPort] = useState(props.drink.portNumber)

    const onSubmitButton = (_event: React.MouseEvent<HTMLButtonElement> ) => {
        if (props.drink.portNumber === currentPort && props.drink.active === status) {
            props.setModalState(false)
            return
        }

        if (status && currentPort == null) {
            props.setModalState(false)
            return
        }

        let data: any = { id: props.drink.id }
        if (props.drink.active !== status) data['active'] = status
        if (props.drink.portNumber !== currentPort) data['portNumber'] = currentPort

        postRequest("/drink/edit", data)
            .then(_ => {
                props.drinks.forEach(drink => {
                    (drink.active && drink.portNumber === currentPort) && (drink.active = false)
                })

                props.drink.active = status
                props.drink.portNumber = currentPort
                props.setModalState(false)
            })
            .catch(_ => {})
    }

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
            py-5
        ">
            { props.drink.portNumber != null &&
                <div className="relative flex h-[20px] w-[20px]">
                    <Image 
                        src={`/images/port-number-${props.drink.portNumber}.svg`}
                        alt={`Port Number ${props.drink.portNumber}`}
                        layout="fill"
                        objectFit="scale-down"
                    />
                </div>
            }
            <div className="flex justify-between">
                <div className="relative h-[30px] w-[90px] md:w-[95px]">
                    <Image
                        src={`/images/${props.drink.name}.svg`}
                        alt={`${props.drink.name}`}
                        layout="fill"
                        objectFit="scale-down"
                    />
                </div>
                <Button 
                    onClick={_event => setStatus(!status)}
                    variant={status ? ButtonVariant.Disable : ButtonVariant.Confirm }
                >
                    { status ? "Disable" : "Enable" }
                </Button>
            </div>
            <div className="before:content-[''] bg-[#CDCDCD] bg-opacity-30 w-full h-[2px]" />
            <Dropdown
                name="Port"
                defaultValue={props.drink.portNumber}
                options={["None", "1", "2", "3"]}
                currentValue={currentPort}
                setCurrentValue={setCurrentPort}
            />
            <Button onClick={onSubmitButton} variant={ButtonVariant.Confirm} />
        </div>
    );
}
