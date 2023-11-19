import { LoggedInHeader } from "../components/LoggedInHeader";
import React from "react";

export default function RockPaperScissor() {
    return (
        <>
            <div className="flex">
                <LoggedInHeader />
            </div>

            <div className="items-center justify-center flex text-4xl mt-6">
                <h1>Welcome to Rock Paper Scissor</h1>
            </div>
        </>
    )
}