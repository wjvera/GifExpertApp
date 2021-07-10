import {useState, useEffect} from 'react';
import { obtenerGifs } from '../helpers/obtenerGifs';

export const useFetchGifs = (cat) => {
   
    const [estado, setEstado] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{

            obtenerGifs(cat)

                .then( imgs =>{

                   setTimeout( ()=>{
                    setEstado({
                        data:imgs,
                        loading: false
                    });
                   }, 3000)

                })

    }, [cat])

    
    return estado;
}
