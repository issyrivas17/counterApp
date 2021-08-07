import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
test('debe de retornar un undefined si heroe no existe  ', () => {
    
    const id = 10; 
    const heroes = getHeroeById(id); 
    expect (heroes).toBe(undefined); 
}) 


test('Debe retornar un arreglo con los heroes de DC', () => { 

    const owner = 'DC' 
    const heroes = getHeroesByOwner (owner); 

   const heroesData = heroes.filter( (heroe) => heroe.owner === owner ); 

   expect(heroes).toEqual(heroesData)
})


});
