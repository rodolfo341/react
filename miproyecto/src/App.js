
import './App.css';

import imagen_1 from './rey_sisebuto';
import imagen_2 from './rey_leogivildo';
import imagen_3 from './rey_atanagildo';

function App() {
    
    return (
        <div className="fondo">
            
            <img src = {imagen_1} className = "rey" alt="condorito"/>
            <img src = {imagen_2} className = "rey" alt="condorito"/>
            <img src = {imagen_3} className = "rey" alt="condorito"/>
    
        </div>
    );
}
export default App;
