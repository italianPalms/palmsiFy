import { LoggedInHeader } from "../components/LoggedInHeader";

export default function groceries() {
    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold">Groceries</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-medium mt-3">Add item</label>
            <input className="p-1 text-black mt-2 w-48" 
                type="text" placeholder="Add item "></input>
            <button className="p-1 mt-4 bg-sky-400 w-48 hover:bg-sky-500 text-white rounded"
            onClick={() => {
                console.log("Add button clicked")
            }}
            >Add</button>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
            <ul>
                <li>
                    <label>
                        <input
                            type="checkbox" className=""
                            onChange={() => {
                                console.log("Checkbox clicked")
                            }}
                            ></input>
                            
                    </label>
                Bananas
                </li>
                <li>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => {
                                console.log("Checkbox clicked")
                            }}
                            ></input>
                            
                    </label>
                Milk
                </li>
                
            </ul>
        </div>
        </>
    )
}