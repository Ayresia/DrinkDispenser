export interface ChartEntryProps {
    name: string,
    value?: number
}

export default function ChartEntry(props: ChartEntryProps) {
    return (
        <div className="flex gap-5 w-full items-center justify-between sm:justify-start">
            <p className="font-semibold lg:text-lg min-w-[95px]">{props.name}</p>
            <div
                className="hidden sm:block before:content-none bg-white h-2 rounded-md drop-shadow-[0_0px_2px_rgba(255,255,255,0.4)]"
                style={{ width: `${props.value}%` }}
            >
            </div>
            <p className="font-semibold lg:text-lg">{props.value}</p>
        </div>
    );
}
