import { LoggedInHeader } from "../components/LoggedInHeader";


const EtchASketch = () => {

    const onClick = () => {
        console.log("Clicked");
    }

    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-medium pb-4">Etch-a-sketch</h1>
                <div className="main">
                    <div className="btns p-2 font-medium">
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
                    <div id="container" className="color-white">  
                    </div>
                </div>
            </div>
        </>
    )}

    export default EtchASketch;