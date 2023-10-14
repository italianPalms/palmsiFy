import { LoggedInHeader } from "../components/LoggedInHeader";

export default function groceries() {
    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl">Groceries</h1>
        </div>
        </>
    )
}