import { LoggedInHeader } from "../components/LoggedInHeader";
import { LoggedInHeaderII } from "../components/LoggedInHeaderII";
import React from "react";

export default function RockPaperScissor() {
    return (
        <>
            <div className="flex">
                <LoggedInHeader />
                <LoggedInHeaderII />
            </div>

            <div className="items-center justify-center flex text-4xl mt-6">
                <h1>Welcome to Rock Paper Scissor</h1>
            </div>
        </>
    )
}