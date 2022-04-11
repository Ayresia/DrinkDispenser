export interface SettingsInputProps {
    title: string,
    description: string
}

export default function SettingsInput(props: SettingsInputProps) {
    return (
        <form className="flex flex-col gap-[10px]">
            <p className="text-xl font-bold">{props.title}</p>
            <p className="text-sm font-medium text-[#FFFFFF] text-opacity-80">{props.description}</p>
            <input className="
                rounded-[15px]
                border-[#C3C3C3]
                bg-black
                bg-opacity-[12%]
                h-[32px]
                p-[20px]
                text-[15px]
                font-medium
                focus:outline-none" 

                type="text" 
            />
        </form>
    )
}
