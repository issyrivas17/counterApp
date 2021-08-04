
import '@testing-library/jest-dom'
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-strings.test.js', () => {
    
    test('getSaludo debe retornar hola ismenia', () => {
        
     const nombre= 'Ismenia'; 

     const saludo = getSaludo(nombre);  
     console.log(saludo)
      expect (saludo).toBe('Hola ' + nombre); 



    })
    

// getSaludo debe retornar Hola carla! si no hay argumento

test('getSaludo debe ternoar Hola carla si no hay argumentos', () => {
    
    const saludo = getSaludo (); 
    expect(saludo).toBe('Hola Carla'); 
})





});
