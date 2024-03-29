import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hunter from "../../img/hunter-2_2x.webp";

export default function Investors () {
    return (
        <>
        <div>
            <Header />
                <div className="help-container">
                    <h1>Welcome to our investor page</h1>
                    <div className="investor-text">
                        <p>Here you will find all relevant information that you as an Investors in PalmsiFy need.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This page will be updated every quarter and an email will be sent out to all investors with all relevant information.</p>
                        <p>Thank you so much for investing in PalmsiFy!</p>
                    </div>
                    <div>
                        <img className="img-investor" src={hunter} alt="img of web developer"></img>
                    </div>
                </div>
            {/* TODO: Fix footer */}
            <Footer /> 
        </div>
        </>
    )
}