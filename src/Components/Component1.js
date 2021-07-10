import React, {Component, useState} from 'react'
import { Component2 } from './Component2';
import { Component3 } from './Component3';

export const Component1 = () => {

    const [arreglo, setArreglo] = useState(['Hunter x Hunter']);


    return (
        <>
            <h1>Gif Expert App</h1>
            <hr/>
            <Component2 setArreglo = {setArreglo} />

            <ol>
                {
                    arreglo.map(cat =>
                        (
                            <Component3 
                                 key = {cat}
                                 cat = {cat}
                            />
                        )
                    )
                }
            </ol>
        </>
    )
}
