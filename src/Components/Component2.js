import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const Component2 = ({ setArreglo }) => {


    const [inputValor, setInputValor] = useState('');

    const agregarNuevoElemento = (e) =>{
        setInputValor(e.target.value);
    }


    const enviarForm = (e) =>{
        e.preventDefault();
        if(inputValor.trim().length > 2){
            setArreglo(cat => [inputValor, ...cat]);
            setInputValor('');
        }else{
            alert('El valor --> '+ inputValor+' <-- tiene que ser mayor de 2 caracteres')
        }
        
    }

    
    return (
        <form onSubmit = {enviarForm}>
            
            <h2>Añadir elemento</h2>

            <input
                    type = "text"
                    value = { inputValor }
                    onChange = {agregarNuevoElemento}
            />
             <hr/>
        </form>
    )
}


Component2.protoTypes = {
    setArreglo: PropTypes.func.isRequired
}