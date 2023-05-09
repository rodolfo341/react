
import img_rey_1 from "./img/rey_sisebuto.png"
import img_rey_2 from "./img/rey_atanagildo.png"

import './App.css';

function App() {

    function incrementar(e)  {
        e.target.innerHTML++;
        e.target.style.backgroundColor = "red";
    }

    return (
        <>
            <div onClick={incrementar} className="caja" >
                1
            </div>
            <button>Aceptar</button>
            <div>
                <img src = {img_rey_1} alt="#"/> 
            </div>
            <input className="cmpo"/>
        </>    
    );
}

export default App;
