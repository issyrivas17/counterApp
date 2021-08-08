import React from 'react';
import { shallow } from "@wojtekmaj/enzyme-adapter-react-17";
import PrimeraApp from "../PrimeraApp"; 
import '@testing-library/jest-dom'

describe('Pruebas en <PrimeraApp/>', () => { 
/*  test('Debe mostrar el mensaje de "Hola,soy ismenia"', () => {
     const saludo = 'Hola,soy ismenia'; 
     const {getByText}= render(<PrimeraApp saludo ={saludo}/>)

    expect(getByText(saludo) ).toBeInTheDocument(); 
 })
 
     */ 

test('Debe de mostrar <PrimeraApp/> correctamente', () => {
    
    const saludo= 'Hola,soy ismenia'; 
const wrapper=shallow(<PrimeraApp saludo={saludo} />) 

expect (wrapper).toMatchSnapshot(); 



})



});
