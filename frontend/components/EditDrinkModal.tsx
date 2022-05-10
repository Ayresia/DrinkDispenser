import { createRef, Dispatch, RefObject, SetStateAction } from "react";
import { Drink } from "../lib/api";
import EditDrinkCard from "./EditDrinkCard";

export interface EditDrinkModalProps {
    drink: Drink,
    drinks: Drink[]
    modalState: boolean,
    setModalState: Dispatch<SetStateAction<boolean>>
}

export default function EditDrinkModal(props: EditDrinkModalProps) {
    const modalRef: RefObject<HTMLDivElement> = createRef()

    const clickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current!.contains(event.target as Node)) return;
        props.setModalState(false)
    }

    return (
        <div onClick={clickEvent} className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <EditDrinkCard
                drink={props.drink}
                drinks={props.drinks}
                elemRef={modalRef}
                setModalState={props.setModalState}
            />
        </div>
    );
}
