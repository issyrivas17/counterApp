   import React from 'react';
   import PropTypes from 'prop-types'; 
   
   /*  import React, { Fragment } from 'react';  */

    const PrimeraApp = ({saludo}) => {
     
        return <>
        <h1>{saludo}</h1>
           {/*  <pre>{JSON.stringify(saludo,null,3)}</pre>  */}
            <p>Mi primera aplicacion web con React</p>
                                                         
        </>;
        } 
        
        PrimeraApp.protoTypes ={
            saludo: PropTypes.string.isRequired
        }
        export default PrimeraApp;  