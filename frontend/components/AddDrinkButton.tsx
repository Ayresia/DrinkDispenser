import AddCupIcon from "../public/images/cup-icon.svg";

export default function AddDrinkButton() {
    return (
        <button className="flex flex-col justify-center items-center gap-[10px] rounded-[32px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] overflow-x-scroll shadow-[0_12px_45px_rgba(0,0,0,0.1)] min-h-[8rem] sm:min-h-[9rem] font-medium">
            <AddCupIcon />
            Add New
        </button>
    );
}
