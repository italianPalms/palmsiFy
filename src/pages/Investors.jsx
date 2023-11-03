import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Investors () {
    return (
        <>
        <div>
            <Header />
        </div>

        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-medium m-6 mt-28">Welcome to our investor page</h1>
            <div className="mt-6 ml-10 mr-10 max-w-2xl">
            <p>Here you will find all relevant information that you as an Investors in PalmsiFy need.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <p>This page will be updated every quarter and an email will be sent out to all investors with all relevant information.</p>
           
            <p>Thank you so much for investing in PalmsiFy!</p>
            </div>
        </div>
        <div>
            {/* add img */}
        </div>

        <Footer /> 
        </>
    )
}