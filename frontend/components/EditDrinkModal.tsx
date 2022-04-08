import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { DrinkName } from "./DrinkCard";
import EditDrinkCard from "./EditDrinkCard";

export interface EditDrinkModalProps {
    name: DrinkName,
    portNumber: 1 | 2 | 3 | null,
    modalState: boolean,
    setModalState: Dispatch<SetStateAction<boolean>>
}

export default function EditDrinkModal(props: EditDrinkModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    useEffect(() => {
        if (!props.modalState) return

        const clickEvent = (event: MouseEvent) => {
            if (modalRef.current?.contains(event.target as Node)) return
            props.setModalState(false)
        }

        window.addEventListener("click", clickEvent)

        return () => {
            window.removeEventListener("click", clickEvent)
        }
    }, [props.modalState])

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <EditDrinkCard elemRef={modalRef} {...props} />
        </div>
    );
}
