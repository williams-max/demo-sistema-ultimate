import { Typography, Button, Collapse, TextField, Modal, Container, Card, CardContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import Paleta from '../../../core/components/common/Paleta'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
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
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { useSolicitudes } from './useSolicitudes';
import { ModalPersonalized } from './components/ModalPersonalized';
import { ModalPersonalized2 } from './components/ModalPersonalized2';
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";

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

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '38%',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Solicitudes = () => {

  //const { customModal, handleOpenModal } = useSolicitudes();
  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };



  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };

  const [openModal2, setOpenModal2] = useState(false);


  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  //two
  const [openModalDos, setOpenModalDos] = useState(false);


  const handleOpenModalDos = () => setOpenModalDos(true);
  const handleCloseModalDos = () => setOpenModalDos(false);
  //thre
  const [openModalTres, setOpenModalTres] = useState(false);
  const handleOpenModalTres = () => setOpenModalTres(true);
  const handleCloseModalTres = () => setOpenModalTres(false);
  return (
    <>
      <div style={{
        backgroundColor: `#343A40`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      // onClick={handleClick}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Solicitudes
          <Button onClick={handleOpenModal2} sx={{ fontSize: '1.6em',color: 'white' }}><BiSearchAlt/></Button>
          <Button onClick={handleOpenModalDos} sx={{ fontSize: '1.6em',color: 'white' }}><AiOutlineClear/></Button>
        </Typography>
        <div>
          <Button  sx={{ fontSize: '2em', color: 'white'}}><IoMdPaperPlane /></Button> 
          <Button  sx={{ fontSize: '2em', color: 'white'}}><IoSaveOutline/></Button> 
          <Button sx={{ fontSize: '2em',color: 'white' }}><SiMicrosoftexcel/></Button>
          <Button sx={{ fontSize: '2em',color: 'white' }}><ImFilePdf/></Button>
        </div>
      </div>
      {/* <div>
        <Typography sx={{fontSize:'20px', fontFamily:'Times New Roman'}}>Descargar</Typography>
          <Button sx={{ fontSize: 35,color: 'green' }}><SiMicrosoftexcel/></Button>
          <Button sx={{ fontSize: 35,color: 'red' }}><ImFilePdf/></Button>
      </div> */}

      <Paleta name="test" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <ModalPersonalized2
        openModalPersonalized={openModal2}
        handleOpenModalPersonalized={handleOpenModal2}
        handleCloseModalPersonalized={handleCloseModal2}
        description="Perfil que desea buscar"
      />

      <ModalPersonalized
        openModalPersonalized={openModalDos}
        handleOpenModalPersonalized={handleOpenModalDos}
        handleCloseModalPersonalized={handleCloseModalDos}
        description="Deseas limpiar todas la modificaciones manuales?"
      />

      <ModalPersonalized
        openModalPersonalized={openModalTres}
        handleOpenModalPersonalized={handleOpenModalTres}
        handleCloseModalPersonalized={handleCloseModalTres}
        description="Deseas cerrar y guardar el formulario?"
      />
      
    </>
  )
}

export default Solicitudes