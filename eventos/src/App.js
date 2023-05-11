
import img_rey_1 from "./img/rey_sisebuto.png";
import img_rey_2 from "./img/rey_atanagildo.png";

import {useRef} from "react";
import './App.css';

function App() {

    const cambio = 23.16;
    const refCaja = useRef();
    const refRey = useRef();
    
    const convertir=()=> refCaja.current.innerHTML *= cambio;        

    const incrementar=(e)=>{
        e.target.innerHTML++;
        if ( e.target.innerHTML >= 10) e.target.innerHTML = 1;
    
        ( e.target.innerHTML >=8 )?e.target.style.backgroundColor = "red":e.target.style.backgroundColor = "white";
        
    }

    const cambiarRey =(e)=> {
        (e.target.src.includes("atanagildo"))?e.target.src = img_rey_1:e.target.src = img_rey_2;     
    }
    const cambiaNum=(e)=> refCaja.current.innerHTML = e.target.value ;

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
            
            <input onChange={cambiaNum} className="cmpo"/>
        </>    
    );
}

export default App;
