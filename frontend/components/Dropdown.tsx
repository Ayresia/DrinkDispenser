import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export interface DropdownProps {
    name: string
    defaultValue: string
    options: string[],
}

export default function Dropdown(props: DropdownProps) {
    const [open, setOpen] = useState(false)
    const selectionRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const onButtonClick = () => setOpen(!open)

    useEffect(() => {
        if (!open) return

        const clickEvent = (event: MouseEvent) => {
            if (selectionRef.current?.contains(event.target as Node)) return
            if (buttonRef.current?.contains(event.target as Node)) return

            setOpen(false)
        }

        window.addEventListener("click", clickEvent)

        return () => {
            window.removeEventListener("click", clickEvent)
        }
    }, [open])

    return (
        <div className="flex gap-5 w-fit">
                <label className="text-white font-semibold relative top-[2px]">{props.name}</label>
                <div className="flex flex-col gap-2">
                    <button ref={buttonRef} onClick={onButtonClick} className="flex items-center gap-[10px] border-[1px] border-[#C3C3C3] rounded-[10px] py-[3px] px-[15px] bg-[#FFFFFF] bg-opacity-20">
                        <p className="font-semibold text-white text-sm">{props.defaultValue}</p>
                        <div className="relative h-[24px] w-[25px]">
                            <Image
                                src="/images/dropdown.svg"
                                layout="fill"
                                objectFit="scale-down"
                                alt="Dropdown Icon"
                            />
                        </div>
                    </button>
                    { open &&
                        <div ref={selectionRef} className="flex flex-col gap-[10px] text-sm text-white border-[1px] border-[#C3C3C3] rounded-[10px] py-[3px] px-[15px] bg-[#FFFFFF] bg-opacity-20">
                            { 
                                props.options.map((option) => {
                                    return <button key={option} className="w-full text-left font-semibold">
                                        {option}
                                    </button>
                                })
                            }
                        </div>
                    }
                </div>
        </div>
    );
}
