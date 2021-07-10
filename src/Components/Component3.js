import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { Component4 } from './Component4';

export const Component3 = ({cat}) => {


    const {data, loading} = useFetchGifs(cat);
    

    return (

        <>
            <h3>{cat}</h3>

            <div className = "card-grid">
            

                {loading && <p>Cargando</p>}

                    {
                    
                        //img para el component 4
                    }

                    {
                        data.map( img =>(
                            <Component4 
                                key = {img.id}
                                { ...img}
                            />
                        ))
                        
                    }
            
            </div>
        </>
       
    )
}
