import React, { useState, useEffect } from "react";

export default function RockPaperScissor() {

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [resultMsg, setResultMsg] =useState("");
    const [playerSelection, setPlayerSelection] = useState(' ');
    const [computerSelection, setComputerSelection] = useState("");
    const [hiddenButtons, setHiddenButtons] = useState(false);
    const [gameResultMsg, setGameResultMsg] = useState("");
    const [textColor, setTextColor] = useState();



    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let randomChoice = Math.floor(Math.random() * choices.length) + 1;

        if(randomChoice === 1) {
            return 'rock';
        } else if (randomChoice === 2) {
            return 'paper';
        } else if (randomChoice === 3) {
            return 'scissors';
        }
    };

    function playRound (playerSelection, computerSelection) {
        let resultMsg = {}

        if(playerSelection === 'rock') {
            if(computerSelection === 'rock') {
                setResultMsg("It's a tie");
                setRoundsPlayed(roundsPlayed + 1);
            } else if (computerSelection === 'paper') {
                setResultMsg("Computer wins")
                setComputerScore(computerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            } else {
                setResultMsg("Congratz, you win!")
                setPlayerScore(playerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            }
        } else if (playerSelection === 'paper') {
            if(computerSelection === 'paper') {
                setResultMsg("It's a tie")
                setRoundsPlayed(roundsPlayed + 1);
            } else if (computerSelection === 'scissors') {
                setResultMsg("Computer wins")
                setComputerScore(computerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            } else {
                setResultMsg("Congratz, you win!")
                setPlayerScore(playerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'scissors') {
                setResultMsg("It's a tie")
                setRoundsPlayed(roundsPlayed + 1);
            } else if (computerSelection === 'rock') {
                setResultMsg("Computer wins")
                setComputerScore(computerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            } else {
                setResultMsg("Congratz, you win!")
                setPlayerScore(playerScore + 1);
                setRoundsPlayed(roundsPlayed + 1);
            }
        }
        return resultMsg;
    }
        function playGame(event) {
            const playerSelection = event.target.id;
            setPlayerSelection(playerSelection);
            const computerSelection = getComputerChoice();
            setComputerSelection(computerSelection);
            playRound(playerSelection, computerSelection);

            //TODO: fix console.logs to be updated correctly - now they are a delayed update
            console.log('Player choose: ' + playerSelection);
            console.log('Computer choose: ' + computerSelection);
            console.log('Result: ' + resultMsg);
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore);
            console.log('Rounds played: ' + roundsPlayed);
           

        }

        useEffect(() => {
            if (playerScore === 5 || computerScore === 5) {
                if(playerScore === 5) {
                    setGameResultMsg("Congratz, you won the game!");
                    setTextColor("#4cceac");
                    console.log('Player won the game!');
                } else if (computerScore === 5) {
                    setGameResultMsg("Computer won the game!");
                    console.log('Computer won the game!');
                }
                setHiddenButtons(true);
                //I have comment out the reset of functions below because it is nice to see when the game is over!
                // setPlayerScore(0);
                // setComputerScore(0);
                // setRoundsPlayed(0);
                // setComputerSelection("");
                // setPlayerSelection("");
                // setResultMsg("");
                
            }
        }, [playerScore, computerScore]);

        const hideButtons = hiddenButtons ? 'hidden' : '';

    return (
        <>
        <div className="flex flex-col items-center justify-center mt-56">
            <div className="items-center justify-center flex text-4xl mt-10">
                <h1>Welcome to Rock Paper Scissor</h1> 
            </div>
            <div className="flex justify-center items-center mt-4">
            <p className="mr-2">Player Score: {playerScore}</p>
            <p className="ml-2">Computer Score: {computerScore}</p>
            </div>  
            <div style={{ color: textColor}}>
            {hiddenButtons ? <h2 className="flex justify-center items-center text-2xl font-bold mt-6">{gameResultMsg}</h2> : 
            <div className="flex justify-center items-center mt-10">
                <button 
                    id='rock' 
                    type="submit" 
                    className={`border-2 p-2 w-28 mr-4 bg-sky-400 hover:bg-sky-500 ${hideButtons}`}
                    onClick={playGame}
                >Rock</button>
                <button 
                    id='paper' 
                    type="submit" 
                    className={`border-2 p-2 w-28 mr-4 bg-sky-400 hover:bg-sky-500 ${hideButtons}`}
                    onClick={playGame}    
                >Paper</button>
                <button 
                    id='scissors' 
                    type="submit" 
                    className={`border-2 p-2 w-28 mr-4 bg-sky-400 hover:bg-sky-500 ${hideButtons}`}
                    onClick={playGame}    
                >Scissors</button>
            </div>
            }
            </div>
            <div className="flex justify-center items-center mt-6">
                <p className="mr-10">You choose: {playerSelection}</p>
                <p>Computer choose: {computerSelection}</p>
            </div>
            <div className="flex justify-center items-center mt-10 text-2xl">
                <p className="mr-6">Result: {resultMsg}</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <p>Rounds played: {roundsPlayed}</p>
            </div>

            {hiddenButtons ? <h2 className="flex justify-center items-center text-2xl mt-28 text-red-500">Refresh the page to play another round</h2> : ""}
        </div>
        </>
    )
}