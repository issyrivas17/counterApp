import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp/>', () => { 
 test('Debe mostrar el mensaje de "Hola,soy ismenia"', () => {
     const saludo = 'Hola,soy ismenia'; 
     const {getByText}= render(<PrimeraApp saludo ={saludo}/>)

    expect(getByText(saludo) ).toBeInTheDocument(); 
 })
 


    
});
