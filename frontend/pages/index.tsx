import ChartEntry from "../components/ChartEntry";
import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import MobileNavbar from "../components/MobileNavbar";
import Head from "next/head";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>DrinkDispenser - Dashboard</title>
            </Head>
            <MainLayout>
                <main className="flex flex-col gap-[20px] p-7 sm:p-10 text-white overflow-x-hidden w-full mb-28 lg:mb-0">
                    <p className="text-4xl font-bold">Dashboard</p>
                    <div className="flex min-h-[127px] gap-[25px] rounded-[32px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] p-5 overflow-x-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
                        <Card title="Total Ltrs Dispensed" value="3L" />
                        <Card title="Most Popular" image="coca-cola" imageAlt="Coca Cola" />
                        <Card title="Drinks Dispensed" value="200" />
                    </div>
                    <p className="text-4xl font-bold">Drinks Dispensed</p>
                    <div className="flex min-h-[162px] flex-col gap-[4px] rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] px-5 py-3 sm:p-5 overflow-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]"> <ChartEntry name="Coca-Cola" value={48} />
                        <ChartEntry name="Sprite" value={27} />
                        <ChartEntry name="Kinnie" value={67} />
                        <ChartEntry name="Water" value={100} />
                        <ChartEntry name="7-Up" value={54} />
                    </div>
                    <p className="text-4xl font-bold">Active Drinks</p>
                    <div className="flex min-h-[127px] gap-6 rounded-[32px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] p-5 overflow-x-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
                        <Card image="coca-cola" imageAlt="Coca Cola" />
                        <Card image="sprite" imageAlt="Sprite" />
                        <Card image="kinnie" imageAlt="Kinnie" />
                    </div>
                    <MobileNavbar />
                </main>
            </MainLayout>
        </>
    )
}
