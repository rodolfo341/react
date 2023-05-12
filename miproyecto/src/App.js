
import './App.css';

import imagen_1 from "./img/rey_sisebuto.png";
import imagen_2 from './img/rey_leogivildo.png';
import imagen_3 from './img/rey_atanagildo.png';
import imagen_ncognito from './img/rey_incognito.png';

import {useRef} from "react";

function App() {
    
    const refFondo = useRef();

    const incognito =(e)=> {
        e.target.src = imagen_ncognito;
        refFondo.current.backgroundColor = "white";
    }

    return (
        <div className="container"> 
            <div ref={refFondo} className="fondo">            
                <img onClick={incognito} src = {imagen_1} className = "rey" alt="condorito"/>
                <div>Sisebuto</div>
            </div>

            <div className="fondo">
                <img onClick={incognito} src = {imagen_2} className = "rey" alt="condorito"/>
                <div>Leogivildo</div>
            </div>

            <div className="fondo">
                <img onClick={incognito} src = {imagen_3} className = "rey" alt="condorito"/>
                <div>Atanagildo</div>
            </div>
        </div>
    );
}
export default App;
