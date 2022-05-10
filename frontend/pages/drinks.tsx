import Head from "next/head";
import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import EditDrinkModal from "../components/EditDrinkModal";
import LoadingSpinner from "../components/LoadingSpinner";
import MainLayout from "../components/MainLayout";
import MobileNavbar from "../components/MobileNavbar";
import { Drink, getRequest } from "../lib/api";

export default function Drinks() {
    const [data, setData] = useState<Drink[]>()
    const [selectedDrinkIndex, setSelectedDrinkIndex] = useState<number>(0)
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        getRequest<Drink[]>("/drinks")
            .then((data: Drink[]) => setData(data))
            .catch(_ => {})
    }, [])

    return (
        <>
            <Head>
                <title>DrinkDispenser - Drinks</title>
            </Head>
            <MainLayout className={openModal ? "blur-md" : ""}>
                { !data && 
                    <div className="flex justify-center items-center h-full w-full">
                        <LoadingSpinner />
                        <MobileNavbar />
                    </div>
                }
                { data &&
                    <main className="flex flex-col gap-[30px] p-7 sm:p-10 text-white overflow-x-hidden w-full mb-28 lg:mb-0">
                        <p className="text-4xl font-bold">Drinks</p>
                        <div className="flex flex-wrap gap-[40px] justify-center 2xl:justify-start overflow-y-auto">
                            { 
                                data.map((drink) => {
                                    return <DrinkCard 
                                        name={drink.name} 
                                        portNumber={drink.portNumber}
                                        active={drink.active}
                                        key={drink.id}
                                        onClick={() => {
                                            setOpenModal(true)
                                            setSelectedDrinkIndex(drink.id - 1)
                                        }}
                                    />
                                })
                            }
                        </div>
                        <MobileNavbar />
                    </main>
                }
            </MainLayout>
            { (data && openModal) &&
                <EditDrinkModal 
                    drink={data[selectedDrinkIndex]}
                    drinks={data}
                    modalState={openModal}
                    setModalState={setOpenModal}
                />
            }
        </>
    )
}
