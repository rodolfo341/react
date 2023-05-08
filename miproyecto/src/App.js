
import './miCss.css';
import imagen from './condorito.png';

function App() {
    let nombre = "Manchas";
    return (
        <div className="fondo">
            <img src = {imagen} className = "condoro" alt="condorito"/>

            <h1>Hola {nombre}</h1> 
        </div>
    );}

export default App;
