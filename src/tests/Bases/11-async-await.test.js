import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas con async-await y Fecth', () => {
    test('Debe de retornar con el url de la prueba',async () => {
       
        const url = await getImagen(); 
        expect(url.includes('https://')).toBe(true)
        


    })
    
});