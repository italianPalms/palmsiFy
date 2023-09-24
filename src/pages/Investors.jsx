import Header from "../components/Header";

export default function Investors () {
    return (
        <>
        <div>
            <Header />
        </div>

        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-medium m-6">Welcome to our investor page</h1>
            <p className="mt-6">Here you will find all relevant information that you as an Investors in PalmsiFy need.</p>
            
            <p>This page will be updated every quarter and an email will be sent out to all investors with all relevant information.</p>
           
            <p>Thank you so much for investing in PalmsiFy!</p>
        </div>
        <div>
            {/* add img */}
        </div>
        </>
    )
}