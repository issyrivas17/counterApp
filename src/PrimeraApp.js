   import React from 'react';
   
   /*  import React, { Fragment } from 'react';  */

    const PrimeraApp = ({saludo ="Hola amigos! Bienvenidos a counter."}) => {

        return <>
        <h1>{saludo}</h1>
           {/*  <pre>{JSON.stringify(saludo,null,3)}</pre>  */}
            <p>Mi primera aplicacion web con React</p>
                                                         
        </>;
        } 

        export default PrimeraApp;  