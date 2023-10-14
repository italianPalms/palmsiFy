import { LoggedInHeader } from "../components/LoggedInHeader";

export default function EtchASketch() {

    const container = document.querySelector("#container");
    const pinkColorButton = document.querySelector(".pink");

    let applyPink = false;

    function createGrid(size = 20) {
        clearGrid();
        makeRowsAndColumns(size);
    }

    const chooseSize = document.querySelector(".grid-size");

    chooseSize.addEventListener('click', function() {
        let preferredSize = prompt("Hi, choose your preferred size (maximum 100)");

        let size = parseInt(preferredSize);

        if(!isNaN(size) && size > 0 && size <= 100) {
            createGrid(size);
        } else {
            console.log("Invalid size. Please choose a number between 1 and 100");
        }
    });

    function clearGrid() {
        const cells = document.getElementsByClassName("cell");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        localStorage.removeItem()
    }

    function makeRowsAndColumns(size) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const cellWidth = containerWidth / size;
        const cellHeight = containerHeight / size;

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                let cell = document.createElement('div');
                cell.classList.add("cell");
                cell.style.width = `${cellWidth}px`;
                cell.style.height = `${cellHeight}px`;
                container.appendChild(cell);
            }
        }
    }



    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        <div className="flex flex-col justify-center items-center mt-10 container">
            <h1 className="text-3xl">Etch-a-sketch</h1>
            <div className="main">
                <div className="btns p-2">
                    <button className="clear-grid p-2">Clear</button>
                    <button className="grid-size p-2">Choose Size</button>
                    <button className="pink p-2">Pink Color</button>
                    <button className="rainbow p-2">Rainbow Color</button>
                </div>
                <div id="container color-white">  
                </div>
            </div>
        </div>
        </>
    )}