import { getUser } from "../../base-pruebas/05-funciones"; 
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
    
    
});
