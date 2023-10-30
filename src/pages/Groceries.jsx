import { LoggedInHeader } from "../components/LoggedInHeader";
import { LoggedInHeaderII } from "../components/LoggedInHeaderII";

export default function groceries() {
    return (
        <>
        <div className="flex">
            <LoggedInHeader />
            <LoggedInHeaderII />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl">Groceries</h1>
        </div>
        </>
    )
}