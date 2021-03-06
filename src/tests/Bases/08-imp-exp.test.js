import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";
 
describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1; 
        const heroe = getHeroeById (id); 

     const heroeData= heroes.find(heroes => heroes.id === id); 

     expect(heroe).toEqual(heroeData)

    })
    

    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10; 
        const heroe = getHeroeById (id); 

     expect(heroe).toBe(undefined)

    }) 

test('Debe de retornar uno de los heroes de Dc', () => { 
    const owner= 'DC'; 
    const heroes = getHeroesByOwner (owner) 

     const heroesData= heroes.filter(heroes =>heroes.owner === owner);

     expect (heroes).toEqual(heroesData)

}); 
 test('Debe retornar un arreglo de los heroes de Marvel', () => {
     const owner = 'Marvel'; 
     const heroes= getHeroesByOwner(owner) 

     expect(heroes.length).toBe(2)
 })
 
}); 