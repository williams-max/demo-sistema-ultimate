import { Typography, Button, Collapse, TextField, Modal, Grid } from '@mui/material'
import React, { useState } from 'react'

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
import SearchIcon from '@mui/icons-material/Search';
import TableViewIcon from '@mui/icons-material/TableView';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



import { ModalPersonalized } from './components/ModalPersonalized';

import { ModalForm } from './components/ModalForm';
import Demo from './components/Demo';
import { ModalTabla } from './components/ModalTabla';
import TablaAccesibilidad from './TablaAccesibilidad';
import { styled } from "@mui/system";


//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//import dayjs from 'dayjs';


const genders = [
  {
    value: 'M',
    label: 'Bebidas Calientes con Cafe',
  },
  {
    value: 'F',
    label: 'Resposteria',
  },
  {
    value: 'F',
    label: 'Frutas Naturales',
  },
  {
    value: 'F',
    label: '1 Extras de Desayunos',
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

const ColorButtonGreen = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#DC3545'),
  backgroundColor: '#28A745',
  '&:hover': {
    backgroundColor: '#1B8332',
  },
}));


const Accesibilidad = () => {


  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };



  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //two
  const [openModalDos, setOpenModalDos] = useState(false);


  const handleOpenModalDos = () => setOpenModalDos(true);
  const handleCloseModalDos = () => setOpenModalDos(false);
  //thre
  const [openModalTres, setOpenModalTres] = useState(false);
  const handleOpenModalTres = () => setOpenModalTres(true);
  const handleCloseModalTres = () => setOpenModalTres(false);
  //four
  const [openModalCuatro, setOpenModalCuatro] = useState(false);
  const handleOpenModalCuatro = () => setOpenModalCuatro(true);
  const handleCloseModalCuatro = () => setOpenModalCuatro(false);


  const [message, setMessage] = useState('');
  const handleChangeSerach = (event: any) => {

    console.log("event ", event.target.value)
    setMessage(event.target.value);
  };

  return (
    <>

      {/* <Button variant="contained" sx={{ backgroundColor: '#D32F2F' }} endIcon={<Select
        // labelId="demo-simple-select-label"
        // sx={{width:'400px'}}
        //  id="demo-simple-select"
        //  value={age}
        // label="Age"


        sx={{
          height: '30px',
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
        }}
        onChange={handleChange}


      >
        <MenuItem value={10}><ExplicitOutlinedIcon sx={{ color: '#43A047' }} />  Excel</MenuItem>


      </Select>}

      >
        Descargar Reportes
      </Button >*/}



      <div style={{
        backgroundColor: '#DC3545', padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'flex-start', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center', marginBottom: '5px'

      }}
      // onClick={handleClick}
      >
        <ManageAccountsIcon sx={{ marginLeft: '20px', color: 'white' }} />
        <Typography variant="subtitle1" gutterBottom sx={{
          marginLeft: '15px', marginTop: '8px',
          color: 'white', alignItems: 'center'
        }} >
          ACCESIBILIDAD
        </Typography>

      </div>



      <ColorButtonGreen variant="contained" sx={{ marginTop: '20px' }} onClick={handleOpenModalTres}>Nuevo Usuario</ColorButtonGreen>

      <br />

      <Box sx={{ width: '100%' }}>


        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
          , alignContent: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h6 style={{ padding: '0px', margin: '0px' }}>Mostrar</h6>
            &nbsp;&nbsp;
            <TextField
              label="Mostrar"
              id="outlined-size-small"
              defaultValue="Small"
              type='number'
              size="small"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h6 style={{ padding: '0px', margin: '0px' }}>Buscar</h6>
            &nbsp;&nbsp;
            <TextField
              label="Buscar"
              id="outlined-size-small"
              defaultValue="Small"
              //  type='number'
              size="small"
              value={message}
              onChange={handleChangeSerach}
            //value={name}
            /*onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log("ee ", event.target.value )
              setMessage(event.target.value);
            }}*/

            />
          </div>




        </div>






      </Box>

      {/*
   
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '20%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h6 style={{ padding: '0px', margin: '0px' }}>Categoria</h6>
              <AddIcon sx={{
                backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                marginLeft: '10px', marginBottom: '10px'
                , fontWeight: 'bold'
              }}
                onClick={handleOpenModal}
              />
            </div>
            <TextField
              id="outlined-select-gender"
              select
              //label="demo"
              label="Categoria"
              // label={gender === "" ? "Seleccione una Opción" : ""}
              value={gender}
              onChange={handleChange}
              sx={{ width: '100%' }}
              //InputLabelProps={{ shrink: false }}


              SelectProps={{
                MenuProps: {

                },
              }}
              //   margin='normal'
              size="small"
              variant="outlined"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}

                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
          <div style={{ width: '20%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h6 style={{ padding: '0px', margin: '0px' }}>Subcategoria</h6>
              <AddIcon sx={{
                backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                marginLeft: '10px', marginBottom: '10px'
                , fontWeight: 'bold'
              }}
                onClick={handleOpenModal}
              />
            </div>
            <TextField
              id="outlined-select-gender"
              select
              label="Subcategoria"
              //label={gender === "" ? "Seleccione una Opción" : ""}
              value={gender}
              onChange={handleChange}
              sx={{ width: '100%' }}
              //   InputLabelProps={{ shrink: false }}


              SelectProps={{
                MenuProps: {

                },
              }}
              //   margin='normal'
              size="small"
              variant="outlined"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}

                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
        </div>
        <div style={{ width: '20%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ padding: '0px', margin: '0px' }}>
              Producto</h6>
            <AddIcon sx={{
              backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
              marginLeft: '10px', marginBottom: '10px'
              , fontWeight: 'bold'
            }}
              onClick={handleOpenModal}
            />
          </div>
          <TextField
            id="outlined-select-gender"
            select
            label="Producto"
            //label={gender === "" ? "Seleccione una Opción" : ""}
            value={gender}
            onChange={handleChange}
            sx={{ width: '100%' }}
            // InputLabelProps={{ shrink: false }}


            SelectProps={{
              MenuProps: {

              },
            }}
            //   margin='normal'
            size="small"
            variant="outlined"
          >
            {genders.map(option => (
              <MenuItem key={option.value} value={option.value}

              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

        </div>
        <div style={{ width: '20%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ padding: '0px', margin: '0px' }}>Presentacion</h6>
            <AddIcon sx={{
              backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
              marginLeft: '10px', marginBottom: '10px'
              , fontWeight: 'bold'
            }}
              onClick={handleOpenModal}
            />
          </div>
          <TextField
            id="outlined-select-gender"
            select
            label="Presentacion"
            // label={gender === "" ? "Seleccione una Opción" : ""}
            value={gender}
            onChange={handleChange}
            sx={{ width: '100%' }}
            // InputLabelProps={{ shrink: false }}


            SelectProps={{
              MenuProps: {

              },
            }}
            //   margin='normal'
            size="small"
            variant="outlined"
          >
            {genders.map(option => (
              <MenuItem key={option.value} value={option.value}

              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

        </div>
      </div>
   */}

      <br />
      <TablaAccesibilidad />

      {/*<Demo />*/}

      <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Deseas cargar la sugerencia del perfil?, puedes perder toda informacion guardada anteriormente"
      />

      <ModalPersonalized
        openModalPersonalized={openModalDos}
        handleOpenModalPersonalized={handleOpenModalDos}
        handleCloseModalPersonalized={handleCloseModalDos}
        description="Deseas limpiar todas la modificaciones manuales?"
      />

      <ModalForm
        openModalPersonalized={openModalTres}
        handleOpenModalPersonalized={handleOpenModalTres}
        handleCloseModalPersonalized={handleCloseModalTres}
        description="Deseas cerrar y guardar el formulario?"
      />

      <ModalTabla
        openModalPersonalized={openModalCuatro}
        handleOpenModalPersonalized={handleOpenModalCuatro}
        handleCloseModalPersonalized={handleCloseModalCuatro}
        description="Deseas cerrar y guardar el formulario?"
      />

      {/*<ModalPersonalized
        openModalPersonalized={openModalTres}
        handleOpenModalPersonalized={handleOpenModalTres}
        handleCloseModalPersonalized={handleCloseModalTres}
        description="Deseas cerrar y guardar el formulario?"
      />*/}
      {/*
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>

          <Typography id="modal-modal-description" sx={{
            mt: 2, textAlign: 'center', fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            Deseas cargar la sugerencia del perfil?, puedes perder toda informacion guardada anteriormente
          </Typography>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button sx={{ backgroundColor: '#7066E0' }} variant="contained" >Si</Button>
            &nbsp; &nbsp;
            <Button sx={{ backgroundColor: '#DC3741' }} variant="contained" >No </Button>
            &nbsp; &nbsp;
            <Button sx={{ backgroundColor: '##6E7881' }} variant="contained" >Cancel</Button>
          </div>
        </Box>
      </Modal>
     */}
      {/*customModal()*/}
    </>
  )
}

export default Accesibilidad