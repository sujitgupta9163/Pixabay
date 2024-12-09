import React from 'react'
import Images from './componets/Images'
import Navbar from './componets/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar/>
      <Images/>
    </>
  )
}

export default App