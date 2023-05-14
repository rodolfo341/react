
import React, {useState, Fragment} from 'react';

const Contador =()=> {
    
    const [numero, setNumero] = useState(0); 

    const Aumentar =()=> {
        setNumero(numero + 1); 
    }

    const Disminuir =()=> {
        setNumero(numero - 1); 
    }

    const Reestablecer =()=> {
        setNumero(numero = 0 ); 
    }
    
    return (
        <Fragment>
            <h1>Contador = {numero}</h1>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
            <button onClick={Reestablecer}>Reestablecer</button>
        </Fragment>
    );
}

export default Contador;

