import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Prueba from './components/Prueba';
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import Principal from './components/Principal';



function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/prueba' element={<Prueba/>}/>
        <Route path='/principal' element={<Principal/>}/>
      </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
