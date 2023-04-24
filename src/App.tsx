//import { AuthProvider } from './app/modules/auth/context'
//import { SplashScreenProvider } from './core/context/SplashScrean'
//import { BrowserRouter } from 'react-router-dom'
//import { Navigation } from './app/Navigation'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField, Button, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
{/*
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import InventarioCierrePage from './pages/invetario-cierrre/InventarioCierrePage';
import SolicitudesPage from './pages/solicitudes/SolicitudesPage';
import RevsionPedidioPage from './pages/revision-pedido/RevsionPedidioPage';
import RecetaComboPage from './pages/receta-combo/RecetaComboPage';
import CrearRecetaPage from './pages/crearreceta/CrearRecetaPage';
import MuiNavbar from './core/components/navbar/MuiNavbar';*/}




//import MiniDrawer from './core/components/navbar/MuiNavbar';

function App() {

  const [textValue, setTextValue] = useState<string>("");
  const onTextChange = (e: any) => {
    console.log(" valor user ", e.target.value)
    setTextValue(e.target.value);
  }

  const [textPasswordValue, setTextPasswordValue] = useState<string>("");
  const onTextPasswordChange = (e: any) => {
    console.log(" valor user ", e.target.value)
    setTextPasswordValue(e.target.value);
  }

  const submitData = async () => {
    try {
      //const respuesta = await axios.post('https://sistemageneralb.azurewebsites.net//index.php/login', {
        const respuesta = await axios.post('https://sistemageneral-ba.azurewebsites.net/login', {
        "usuario": "amondocorre",
        "password": "Capresso"
        /*
         "user": textValue,
        "pass": textPasswordValue
        */
      })
console.log("rest",respuesta)
    } catch (error) {

    }
  }


  return (

    {/*<BrowserRouter  >



     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

          <Route path="/existencia-prueba" element={<InventarioCierrePage />} />
          <Route path="/solicitud-prueba" element={<SolicitudesPage />} />
          <Route path="/apv-prueba" element={<RevsionPedidioPage />} />
          <Route path="/receta-combo" element={<RecetaComboPage />} />
          <Route path="/receta" element={<CrearRecetaPage />} />
        </Routes>
    

    </BrowserRouter >*/}


  );
}

export default App
