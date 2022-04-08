import ChartEntry from "../components/ChartEntry";
import OverviewCard from "../components/OverviewCard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex h-full m-5 sm:m-10 rounded-[20px] border-[1px] border-[#C3C3C3] bg-[#EEEEEE] bg-opacity-10 overflow-x-hidden">
            <Sidebar />
            <main className="flex flex-col gap-[20px] p-7 sm:p-10 text-white overflow-x-hidden w-full">
                <p className="text-4xl font-bold">Dashboard</p>
                <div className="flex gap-[25px] rounded-[20px] border-[1px] border-[#C3C3C3] bg-[#000000] bg-opacity-[12%] p-5 overflow-x-scroll">
                    <OverviewCard title="Total Ltrs Dispensed" value="3L" />
                    <OverviewCard title="Most Popular" image="coca-cola" />
                    <OverviewCard title="Drinks Dispensed" value="200" />
                </div>
                <p className="text-4xl font-bold">Drinks Dispensed</p>
                <div className="flex flex-col gap-6 rounded-[20px] border-[1px] border-[#C3C3C3] bg-[#000000] bg-opacity-[12%] p-5 overflow-scroll">
                    <ChartEntry name="Coca-Cola" value={48} />
                    <ChartEntry name="Sprite" value={27} />
                    <ChartEntry name="Kinnie" value={67} />
                    <ChartEntry name="Water" value={100} />
                    <ChartEntry name="7-Up" value={54} />
                </div>
                <p className="text-4xl font-bold">Active Drinks</p>
                <div className="flex gap-6 rounded-[20px] border-[1px] border-[#C3C3C3] bg-[#000000] bg-opacity-[12%] p-5 overflow-x-scroll">
                    <OverviewCard image="coca-cola" />
                    <OverviewCard image="coca-cola" />
                    <OverviewCard image="coca-cola" />
                </div>
            </main>
        </div>
    )
}
