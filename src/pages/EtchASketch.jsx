import { LoggedInHeader } from "../components/LoggedInHeader";
import React, { useEffect, useState } from 'react';


const EtchASketch = () => {
    const onClick = () => {
        console.log("Clicked");
    }

    const [gridSize, setGridSize] = useState({width: 0, height: 0});
    const [cellSize, setCellSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const container = document.getElementById("container");
        if(container) {
            const { clientWidth, clientHeight } = container;
            const cellWidth = clientWidth / 15;
            const cellHeight = clientHeight / 15;

            setGridSize({ width: clientWidth, height: clientHeight });
            setCellSize({ width: cellWidth, height: cellHeight });
        }
    }, []);

    const grid = new Array(15).fill().map(() => new Array(15).fill(0));

    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-medium pb-4">Etch-a-sketch</h1>
                <div className="main">
                    <div className="btns p-2 pb-6 font-medium">
                        <button className="grid-size p-2"
                        onClick={onClick}
                        >Create Grid</button>

                        <button className="clear-grid p-2"
                        onClick={onClick}
                        >Clear</button>

                        <button className="pink p-2"
                        onClick={onClick}
                        >Pink Color</button>

                        <button className="rainbow p-2"
                        onClick={onClick}
                        >Rainbow Color</button>
                    </div>
                    <div id="container" className="container">
                        <div className="grid" style={{width: gridSize.width, height: gridSize.height}}>
                            {grid.map((row, rowIndex) => (
                                <div key={rowIndex} className="row">
                                    {row.map((cell, colIndex) => (
                                        <div key={colIndex} className="cell">
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
        </>
    )}

    export default EtchASketch;