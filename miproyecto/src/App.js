
import './App.css';

import imagen_1 from "./rey_sisebuto.png";
import imagen_2 from './rey_leogivildo.png';
import imagen_3 from './rey_atanagildo.png';

function App() {
    
    return (
        <div className="container"> 
            <div className="fondo">            
                <img src = {imagen_1} className = "rey" alt="condorito"/>
                <div>Sisebuto</div>
            </div>

            <div className="fondo">
                <img src = {imagen_2} className = "rey" alt="condorito"/>
                <div>Leogivildo</div>
            </div>

            <div className="fondo">
                <img src = {imagen_3} className = "rey" alt="condorito"/>
                <div>Atanagildo</div>
            </div>
        </div>
    );
}
export default App;
