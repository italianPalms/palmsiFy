import React, { useEffect, useState } from 'react';


const EtchASketch = () => {
    const [size, setSize] = useState(20);
    console.log(size);
    const [, setPink] = useState(false);
    const [, setRainbow] = useState(false)

    useEffect(() => {
        createGrid();
    }, [size]);

    const createGrid = () => {
        clearGrid(); 
        makeRowsAndColumns();
        applyHoverPink();
        };

    //logic to handle size change with prompt and alert
    const chooseSize = () => {
        let preferredSize = prompt('Enter the size you want for the grid (maximum 100):');
        let newSize = parseInt(preferredSize);
        if(!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            setSize(newSize);
        } else {
            alert('Invalid size entered. Please enter a number between 1 and 100.');
        }
    };

    //function to clear the grid
    const clearGrid = () => {
        const cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'white'; //sets all cells to white
        }      
    };

    const makeRowsAndColumns = () => {
        clearGrid();

        const container = document.getElementById('container');
        container.innerHTML = ''; //clear the container
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const cellWidth = containerWidth / size;
        const cellHeight = containerHeight / size;

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = `${cellWidth}px`; //set the cell width according to CSS styling and make sure all cells are the same size inside the container
                cell.style.height = `${cellHeight}px`; //set the cell height according to CSS styling and make sure all cells are the same size inside the container
                container.appendChild(cell);
            }
        }
    };

    //logic for pink color
    const applyHoverPink = () => {
        const cells = document.getElementsByClassName('cell');

        for(let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'pink';
            })
        }
    }
    
    //logic for rainbow color
    const applyHoverColor = () => {
        const cells = document.getElementsByClassName('cell');

        for(let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', (event) => {
                    const randomColor = getRandomColor();
                    event.target.style.backgroundColor = randomColor;
            })
        }
    };

    //random color to the rainbow functionality
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    //add handler for pink color
    const handlePinkColor = () => {
        console.log('Pink color button clicked');
        setRainbow(false);
        setPink(true);
        applyHoverPink();
    };
    //add handler for rainbow color
    const handleRainbowColor = () => {
        console.log('Rainbow color button clicked');
        setRainbow(true);
        setPink(false);
        applyHoverColor();
    }
    
    return (
        <>
        <div className="etch-a-sketch-container">
            <h1>Etch-a-sketch</h1>
            <div>
                <div className="etch-a-sketch-btns">
                    <div className='top-btns'>
                        <button className="blue-btn_medium etch-a-sketch-btn"
                        onClick={chooseSize}
                        >Choose Size</button>

                        <button className="blue-btn_medium etch-a-sketch-btn"
                        onClick={clearGrid}
                        >Clear Grid</button>
                    </div>
                    <div className='bottom-btns'>
                        <button className="blue-btn_medium etch-a-sketch-btn"
                        onClick={handlePinkColor}
                        >Pink Color</button>

                        <button className="blue-btn_medium etch-a-sketch-btn"
                        onClick={handleRainbowColor}
                        >Rainbow Color</button>
                    </div>
                </div>
                <div id="container" className="etch-a-sketch-grid"></div>
            </div>
        </div>
        </>
    )
}
    export default EtchASketch;