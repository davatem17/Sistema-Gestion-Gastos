import React, { useContext } from 'react'
import AppContext from '../context/AppContext';


const Prueba = () => {
    const {state} = useContext(AppContext)
    console.log(state);
    return ( 
        <h1>Hola</h1>
     );
}
 
export default Prueba;