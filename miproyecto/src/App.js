
import './App.css';
import imagen from './condorito.png';

function App() {
    let nombres = [
        {
            nombre:"Manchas",
            edad: 7},
        {
            nombre:"Gato",
            edad: 5
        }
    ];
    return (
        <div className="fondo">
            <img src = {imagen} className = "condoro" alt="condorito"/>
            <h1>Edad = {nombres[1].nombre}</h1> 
        </div>
    );}



export default App;
