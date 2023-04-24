import { Typography, Button, Collapse, TextField } from '@mui/material'
import React, { useState } from 'react'
import PaletaEntrega from '../../../core/components/common/PaletaEntrega';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';


import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ModalPersonalized3 } from './components/ModalPersonalized3';
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";

const genders = [
  {
    value: 'M',
    label: 'Perfil01',
  },
  {
    value: 'F',
    label: 'Perfil012',
  },

];

const Entregas = () => {

  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };

  const [age, setAge] = React.useState('Button Prueba');

  //const handleChange = (event: any) => {
  //setAge(event.target.value);
  //};

  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  //<--modal
  const [openModal3, setOpenModal3] = useState(false);

  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);
  //modal-->

  return (
    <>
    {/* <div style={{ width: '15%', margin: 'auto', marginTop: '20px', marginBottom: '8px' }}>
            <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/close2.png" />
    </div> */}

      <div style={{
        backgroundColor: `#343A40`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '0px', marginTop: '1%'
        , alignItems: 'center'

      }}
      // onClick={handleClick}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '10px', color: 'white', fontSize:'20px', fontFamily:'Times New Roman' }} >
          Entrega
          <Button onClick={handleOpenModal3} sx={{ fontSize: '1.5em',color: 'white' }}><BiSearchAlt/></Button>
        </Typography>
        <Typography sx={{ marginLeft: '15px', color: 'Red', fontSize:'20px', fontFamily:'Times New Roman' }}>
          <Button variant="contained" sx={{ backgroundColor: 'red', fontSize:'15px', fontFamily:'Times New Roman' }}>Bloqueado</Button>
        </Typography>
        <div>
          <Button sx={{ fontSize: '2em',color: 'white' }}><SiMicrosoftexcel/></Button>
          <Button sx={{ fontSize: '2em',color: 'white' }}><ImFilePdf/></Button>
        </div>

      </div> 

 

      <PaletaEntrega name="Reposteria" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <PaletaEntrega name="Salados" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <ModalPersonalized3
        openModalPersonalized={openModal3}
        handleOpenModalPersonalized={handleOpenModal3}
        handleCloseModalPersonalized={handleCloseModal3}
        description="Perfil que desea buscar"
      />

    </>
  )
}

export default Entregas