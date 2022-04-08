import AddDrinkButton from "../components/AddDrinkButton";
import Sidebar from "../components/Sidebar";

export default function Drinks() {
    return (
        <div className="flex h-full m-5 sm:m-10 rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#EEEEEE] bg-opacity-10 overflow-x-hidden">
            <Sidebar />
            <main className="flex flex-col gap-[20px] p-7 sm:p-10 text-white overflow-x-hidden w-full">
                <p className="text-4xl font-bold">Drinks</p>
                <AddDrinkButton />
            </main>
        </div>
    )
}
