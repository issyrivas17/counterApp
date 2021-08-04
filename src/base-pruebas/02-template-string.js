


const nombre   = '';
const apellido = 'Rivas';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

/* console.log( nombreCompleto ); */


export function getSaludo(nombre = 'Carla') {
    return 'Hola ' + nombre;
}

/* console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` ); */