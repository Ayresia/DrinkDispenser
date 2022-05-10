import ChartEntry from "../components/ChartEntry";
import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import MobileNavbar from "../components/MobileNavbar";
import Head from "next/head";
import { parseDrinkName } from "../util";
import { useEffect, useState } from "react";
import { Drink, getRequest, OverviewData } from "../lib/api";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Dashboard() {
    let [data, setData] = useState<OverviewData>()

    useEffect(() => {
        getRequest<OverviewData>("/overview")
            .then((data: OverviewData) => setData(data))
            .catch(_ => {})
    }, [])

    return (
        <>
            <Head>
                <title>DrinkDispenser - Dashboard</title>
            </Head>
            <MainLayout>
                { !data && 
                    <div className="flex justify-center items-center h-full w-full">
                        <LoadingSpinner />
                        <MobileNavbar />
                    </div>
                }
                { data &&
                    <main className="flex flex-col gap-[20px] p-7 sm:p-10 text-white overflow-x-hidden w-full mb-28 lg:mb-0">
                        <p className="text-4xl font-bold">Dashboard</p>
                        <div className="flex min-h-[127px] gap-[25px] rounded-[32px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] p-5 overflow-x-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
                            <Card title="Total Ltrs Dispensed" value="0L" />
                            <Card 
                                title="Most Popular"
                                image={data!.topFiveDrinksDispensed[0].name}
                                imageAlt={parseDrinkName(data!.topFiveDrinksDispensed[0].name)}
                            />
                            <Card title="Drinks Dispensed" value={data!.totalDrinksDispensed.toString()} />
                        </div>
                        <p className="text-4xl font-bold">Drinks Dispensed</p>
                        <div className="flex min-h-[162px] flex-col gap-[4px] rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] px-5 py-3 sm:p-5 overflow-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
                        { 
                            data!.topFiveDrinksDispensed.map((drink: Drink) => {
                                return <ChartEntry key={drink.id} name={parseDrinkName(drink.name)} value={drink.totalDispensed} />
                            })
                        }
                        </div>
                        <p className="text-4xl font-bold">Active Drinks</p>
                        <div className="flex min-h-[127px] gap-6 rounded-[32px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#000000] bg-opacity-[12%] p-5 overflow-x-auto shadow-[0_12px_45px_rgba(0,0,0,0.1)]">
                            {
                                data!.activeDrinks.map((drink: Drink) => {
                                    return <Card key={drink.id} image={drink.name} imageAlt={parseDrinkName(drink.name)} />
                                })
                            }
                        </div>
                        <MobileNavbar />
                    </main>
                }
            </MainLayout>
        </>
    )
}
