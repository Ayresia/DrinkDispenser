import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";
import { DrinkName } from "./DrinkCard";
import EditDrinkCard from "./EditDrinkCard";

export interface EditDrinkModalProps {
    name: DrinkName,
    portNumber: number | null,
    modalState: boolean,
    setModalState: Dispatch<SetStateAction<boolean>>
}


export default function EditDrinkModal(props: EditDrinkModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const checkOuterClick = useCallback((props, modalRef) => {
        if (!props.modalState) return

        const clickEvent = (event: MouseEvent) => {
            if (modalRef.current?.contains(event.target as Node)) return
            props.setModalState(false)
        }

        window.addEventListener("click", clickEvent)

        return () => {
            window.removeEventListener("click", clickEvent)
        }
    }, [])

    useEffect(() => {
        checkOuterClick(props, modalRef)
    }, [props, checkOuterClick])

    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <EditDrinkCard elemRef={modalRef} {...props} />
        </div>
    );
}
