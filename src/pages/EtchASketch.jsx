import { LoggedInHeader } from "../components/LoggedInHeader";
import React, { useEffect, useState } from 'react';


function EtchASketch() {

    const [size, setSize] = useState(20);
    console.log(size);
    // const [rainbow, setRainbow] = useState(false);
    const [pink, setPink] = useState(false);

    useEffect(() => {
        createGrid();
    }, [size]);

    const createGrid = () => {
        // clearGrid(); 
        makeRowsAndColumns();
        applyHoverColor();
    };

    //functionality to clear grid
    const clearGrid = () => {
        const cells = document.getElementsByClassName('cell');
        for(let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'white';
        }
        console.log('clear grid clicked');
    }
    
    const makeRowsAndColumns = () => {
        const container = document.getElementById('container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const cellWidth = containerWidth / size;
        const cellHeight = containerHeight / size;

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = `${cellWidth}px`;
                cell.style.height = `${cellHeight}px`;
                container.appendChild(cell);
            }
        }
    };

    //add logic for rainbow color
    const applyHoverColor = () => {
        const cells = document.getElementsByClassName('cell');
        for(let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'pink';
            })
        }
    };

    //add random color to the rainbow functionality

    //add logic to handle size change with prompt and alert

    //add handler for rainbow color
    const handlePinkColor = () => {
        console.log('Pink color button clicked');
        setPink(true);
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
                        
                        <button className="grid-size p-2"
                        onClick={createGrid}
                        >Create Grid</button>

                        <button className="clear-grid p-2"
                        onClick={clearGrid}
                        >Clear</button>

                        <button className="pink p-2"
                        onClick={handlePinkColor}
                        >Pink Color</button>

                        <button className="rainbow p-2"
                        onClick={(() => {
                            console.log("rainbow button clicked");
                        })}
                        >Rainbow Color</button>
                    </div>
                    <div id="container" className="mt-6"></div>
                </div>
        </div>
        </>
    )}

    export default EtchASketch;