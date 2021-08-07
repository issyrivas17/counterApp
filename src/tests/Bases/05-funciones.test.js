import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"; 
import '@testing-library/jest-dom'

describe('Pruebas de funciones', () => { 

    test('Debe retornar un objeto', () => {

        const userTest = {
            uid:'ABC123',
            username: 'El_Papi1502' 
        }
        
        const user= getUser(); 

     expect(user).toEqual(userTest)
        
    })

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = "Juan";
        const user= getUsuarioActivo(nombre);  
       
        expect(user).toEqual ({
            uid: 'ABC567',
            username: 'nombre'
        })
     
    })
    
    
    
});
