    import React from 'react';
    import ReactDOM from 'react-dom'; 
 /*   import PrimeraApp from './PrimeraApp'  */ 
    import './index.css'; 
    import CounterApp from './CounterApp';

    const divRoot = document.querySelector('#root'); 



    console.log(divRoot);  

    ReactDOM.render(<CounterApp  value= {1997} />,divRoot); 

