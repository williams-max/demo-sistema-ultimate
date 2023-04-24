import { Typography, Button, Collapse, TextField } from '@mui/material'
import React, { useState } from 'react'
import Paleta from '../../../core/components/common/Paleta'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';

import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";

import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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

const RevisionPedido = () => {

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
          Preparacion
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
    </>
  )
}

export default RevisionPedido