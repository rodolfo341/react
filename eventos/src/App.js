
import img_rey_1 from "./img/rey_sisebuto.png";
import img_rey_2 from "./img/rey_atanagildo.png";

import {useRef} from "react";
import './App.css';

function App() {

    const cambio = 23.16;
    const refCaja = useRef();
    const refRey = useRef();
    
    function convertir() {
        refCaja.current.innerHTML *= cambio;        
    }

    function incrementar(e)  {
        e.target.innerHTML++; 
    }

    function cambiarRey (e) {
        e.target.src = img_rey_2;
    }

    return (
        <>
            <div ref={refCaja}
                 className="caja"
                 onClick={incrementar}
            >
                1
            </div>

            <button onClick={convertir}>Aceptar</button>
            
            <div ref={refRey}>
                <img onClick={cambiarRey} src = {img_rey_1} alt="#"/> 
            </div>
            
            <input className="cmpo"/>
        </>    
    );
}

export default App;
