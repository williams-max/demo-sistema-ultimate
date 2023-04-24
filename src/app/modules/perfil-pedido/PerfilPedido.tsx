import { Typography, Button, Collapse, TextField } from '@mui/material'
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
import FormControl from '@mui/material/FormControl';
//import { createStyles, makeStyles, withStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import SearchIcon from '@mui/icons-material/Search';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Form } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegClone } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { IoSaveOutline } from "react-icons/io5";
import { ModalPersonalized } from './components/ModalPersonalized';
import { ModalPersonalized2 } from './components/ModalPersonalized2';
import { ModalPersonalized3 } from './components/ModalPersonalized3';


const genders = [
  {
    value: 'M',
    label: 'Perfil01',
  },
  {
    value: 'F',
    label: 'Perfil02',
  },

];

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  /*
  const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
      root: {
        'label + &': {
          marginTop: theme.spacing(3),
        },
      },
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 15,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },
    }),
  )(InputBase);*/


const PerfilPedido = () => {

  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };    
  
  /*
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      margin: {
        margin: theme.spacing(1),
      },
    }),
  );*/


//<---MODAL
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => setOpenModal(true);
const handleCloseModal = () => setOpenModal(false);

const [openModal2, setOpenModal2] = useState(false);

const handleOpenModal2 = () => setOpenModal2(true);
const handleCloseModal2 = () => setOpenModal2(false);

const [openModal3, setOpenModal3] = useState(false);

const handleOpenModal3 = () => setOpenModal3(true);
const handleCloseModal3 = () => setOpenModal3(false);
//MODAL-->

  
  
  return (
    <>


    <div style={{
        backgroundColor: `#DC3545`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          <PersonAddIcon/>
          Configuracion de Perfil de Pedidos
        </Typography>
        <div>
          <Button onClick={handleOpenModal3} sx={{ fontSize: '1.6em',color: 'white' }}><BiSearchAlt/></Button>
          <Button onClick={handleOpenModal} sx={{fontSize:'1.6em',color:'white'}}><AiOutlinePlusCircle/></Button>
          <Button onClick={handleOpenModal2} sx={{fontSize:'1.6em',color:'white'}}><FaRegClone/></Button>
          </div>
    </div>
   
    {/* <div  style={{display:'flex'}}>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
            <h3  style={{margin: "0px"}}>Perfil</h3>
            <TextField
              id="outlined-select-gender"
              select
              label={gender === "" ? "Perfil de Pedido" : ""}

              value={gender}
              onChange={handleChange}
              sx={{ width: '25ch' }}
              InputLabelProps={{ shrink: false }}
              SelectProps={{
                MenuProps: {

                },
              }}
              margin="normal"
              variant="outlined"
            >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
        &nbsp; &nbsp;
            <Button sx={{backgroundColor:'#d50000' }} variant="contained" startIcon={<SearchIcon />}>Buscar</Button>  
            </Grid>
            <Grid item xs={4}>
            <br></br> 
            <Button sx={{backgroundColor:'#008000' }} variant="contained" startIcon={<AddIcon />} onClick={handleOpenModal}>Crear</Button>
            &nbsp; &nbsp;
            <Button sx={{backgroundColor:'#000080' }} variant="contained" startIcon={<FilterNoneIcon />} onClick={handleOpenModal2}>Clonar</Button>
            </Grid>
        </Grid>
        
    </div>  */}

    <div style={{
        backgroundColor: `#343A40`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '0px', marginTop: '1%'
        , alignItems: 'center'

      }}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white', fontSize:'18px', fontFamily:'Times New Roman' }} >
         Perfil01
        </Typography>
        <div>
          <Button  sx={{ fontSize: '2em', color: 'white'}}><IoSaveOutline/></Button> 
        </div>
    </div>

      <Paleta name="test" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Nuevo Perfil de Pedido"
      />

      <ModalPersonalized2
        openModalPersonalized={openModal2}
        handleOpenModalPersonalized={handleOpenModal2}
        handleCloseModalPersonalized={handleCloseModal2}
        description="Clonar Perfil de Pedido"
      />

      <ModalPersonalized3
        openModalPersonalized={openModal3}
        handleOpenModalPersonalized={handleOpenModal3}
        handleCloseModalPersonalized={handleCloseModal3}
        description="Perfil que desea buscar"
      />
      
    </>
  )
}

export default PerfilPedido
