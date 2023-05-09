
import './App.css';
import imagen from './condorito.png';

function App() {
    let nombre = {nombre:"Manchas",
                    edad: 7};
    return (
        <div className="fondo">
            <img src = {imagen} className = "condoro" alt="condorito"/>
            <h1>Edad = {nombre.edad}</h1> 
        </div>
    );}


    
export default App;
