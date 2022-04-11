import { useState } from "react";
import AddDrinkButton from "../components/AddDrinkButton";
import DrinkCard, { DrinkName } from "../components/DrinkCard";
import EditDrinkModal from "../components/EditDrinkModal";
import MainLayout from "../components/MainLayout";

export default function Drinks() {
    let drinks = [
        { type: DrinkName.CocaCola, portNumber: 1 },
        { type: DrinkName.Sprite, portNumber: 2 },
        { type: DrinkName.Kinnie, portNumber: 3 },
        { type: DrinkName.Sprite, portNumber: null },
        { type: DrinkName.Kinnie, portNumber: null },
        { type: DrinkName.MountainDew, portNumber: null },
        { type: DrinkName.SevenUp, portNumber: null },
        { type: DrinkName.Pepsi, portNumber: null },
    ]

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <MainLayout className={openModal ? "blur-md" : ""}>
                <main className="flex flex-col gap-[30px] p-7 sm:p-10 text-white overflow-x-hidden w-full">
                    <p className="text-4xl font-bold">Drinks</p>
                    <AddDrinkButton />
                    <div className="flex flex-wrap gap-[40px] justify-center 2xl:justify-start overflow-y-scroll">
                        { 
                            drinks.map((drink) => {
                                return <DrinkCard 
                                    name={drink.type} 
                                    portNumber={drink.portNumber}
                                />
                            })
                        }
                    </div>
                </main>
            </MainLayout>
            { openModal &&
                <EditDrinkModal 
                    name={drinks[0].type}
                    portNumber={drinks[0].portNumber}
                    modalState={openModal}
                    setModalState={setOpenModal}
                />
            }
        </>
    )
}
