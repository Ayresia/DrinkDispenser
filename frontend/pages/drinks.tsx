import AddDrinkButton from "../components/AddDrinkButton";
import DrinkCard, { DrinkName } from "../components/DrinkCard";
import Sidebar from "../components/Sidebar";

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

    return (
        <div className="flex h-full m-5 sm:m-10 rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#EEEEEE] bg-opacity-10 overflow-x-hidden">
            <Sidebar />
            <main className="flex flex-col gap-[30px] p-7 sm:p-10 text-white overflow-x-hidden w-full">
                <p className="text-4xl font-bold">Drinks</p>
                <AddDrinkButton />
                <div className="flex flex-wrap gap-[40px] justify-center">
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
        </div>
    )
}
