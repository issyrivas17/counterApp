import { getHeroeById } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
test('debe de retornar un heroe por id ', () => {
    
    const id = 1; 
    const heroe = getHeroeById(id); 

    const heroeData= heroes.find(heroe =>heroe.id === id);  

    expect (heroe).toEqual(heroeData)
})

});
