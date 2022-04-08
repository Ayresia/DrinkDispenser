import { useState } from "react";

export interface DropdownProps {
    name: string
    defaultValue: string
    options: string[],
}

export default function Dropdown(props: DropdownProps) {
    const [open, setOpen] = useState(false)
    const onButtonClick = () => setOpen(!open)

    return (
        <div className="flex gap-5 w-fit">
                <label className="text-white font-semibold relative top-[2px]">{props.name}</label>
                <div className="flex flex-col gap-2">
                    <button onClick={onButtonClick} className="flex items-center gap-[10px] border-[1px] border-[#C3C3C3] rounded-[10px] py-[3px] px-[15px] bg-[#FFFFFF] bg-opacity-20">
                        <p className="font-semibold text-white text-sm">{props.defaultValue}</p>
                        <img
                            src="./images/dropdown.svg"
                            className=""
                            alt="Dropdown Icon"
                        />
                    </button>
                    { open &&
                        <div className="flex flex-col gap-[10px] text-sm text-white border-[1px] border-[#C3C3C3] rounded-[10px] py-[3px] px-[15px] bg-[#FFFFFF] bg-opacity-20">
                            { 
                                props.options.map((option) => {
                                    return <button className="w-full text-left font-semibold">{option}</button>
                                })
                            }
                        </div>
                    }
                </div>
        </div>
    );
}
