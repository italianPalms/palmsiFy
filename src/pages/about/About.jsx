import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function About() {

    return (
        <>
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <div className="flex flex-col font-medium items-center justify-center">
                    <h1 className="text-3xl font-medium m-6 mt-28">About PalmsiFy</h1>
                    <div className="p-2 ml-10 mr-10 max-w-2xl">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>        
        </>
    )
}