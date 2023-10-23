import { LoggedInHeader } from "../components/LoggedInHeader";
import React, { useEffect, useState } from 'react';


function EtchASketch() {
    const [gridSize, setGridSize] = useState({rows: 20, cols: 20});
    console.log("gridSize", gridSize);

    const initialGrid = Array.from({ length: gridSize.rows }, () => Array.from({ length: gridSize.cols }, () => ({
        width: 1, 
        height: 1,
    }))
    );

    const [grid, setGrid] = useState(initialGrid);

    useEffect(() => {
        const availableWidth = window.innerWidth;
        const availableHeight = window.innerHeight - 96;
        console.log('Available Width:', availableWidth);
        console.log('Available Height: ', availableHeight);

        const cellWidth = availableWidth / gridSize.cols;
        const cellHeight = availableHeight / gridSize.rows;
        console.log('Cell Width:', cellWidth);
        console.log('Cell Height:', cellHeight);

        const newGrid = Array.from({ length: gridSize.rows }, () => Array.from({ length: gridSize.cols }, () => ({
            width: cellWidth, 
            height: cellHeight, 
        }))
        );
        console.log('New Grid:', newGrid);

        setGrid(newGrid);
    }, [gridSize]);


    const createGrid = () => {
        console.log("create grid button clicked");
        const newSize = prompt('Enter grid size (maximum 100):');
        if(!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
            const cellWidth = window.innerWidth / newSize;
            const cellHeight = (window.innerHeight - 96) / newSize;

            setGridSize({rows: newSize, cols: newSize, cellWidth, cellHeight });

        } else {
            alert('Please enter a valid number between 1 and 100');
        }
    };

    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-medium pb-4 mt-10">Etch-a-sketch</h1>
                <div className="main">
                    <div className="btns pt-2 font-medium flex justify-center">
                        {/* <input className="text-black"
                        type="number"
                        placeholder="Enter grid size (maximum 100):"
                        value={inputValue}
                        onChange={handleInputChange}
                        ></input> */}
                        
                        <button className="grid-size p-2"
                        onClick={createGrid}
                        >Create Grid</button>

                        <button className="clear-grid p-2"
                        onClick={(() => {
                            console.log("clear button clicked");
                        })}
                        >Clear</button>

                        <button className="pink p-2"
                        onClick={(() => {
                            console.log("pink button clicked");
                        })}
                        >Pink Color</button>

                        <button className="rainbow p-2"
                        onClick={(() => {
                            console.log("rainbow button clicked");
                        })}
                        >Rainbow Color</button>
                    </div>
                    <div id="container" className="container flex justify-center items-center flex-col min-h-screen pb-96">
                        <div className="grid" style={{ width: gridSize.cols * gridSize.cellWidth, height: gridSize.rows * gridSize.cellHeight }}> 
                            {grid.map((row, rowIndex) => (
                                <div key={rowIndex} className="row">
                                    {row.map((cell, colIndex) => (
                                        <div key={colIndex} 
                                        className="cell">
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