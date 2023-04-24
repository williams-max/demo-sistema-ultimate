import { Typography, Button, Collapse, TextField, Modal, Grid, InputAdornment } from '@mui/material'
import React, { useState, useEffect } from 'react'
//import Paleta from '../../../core/components/common/Paleta'
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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';



import { ModalPersonalized } from './components/ModalPersonalized';
//import TablaVenta from './TablaVenta';
//import TablaAccesoFormasPago from './TablaAccesoFormasPago';


import { ModalForm } from './components/ModalForm';
import Demo from './components/Demo';
import { ModalTabla } from './components/ModalTabla';
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//import dayjs from 'dayjs';

import PersonIcon from '@mui/icons-material/Person';
import { Controller, useForm } from "react-hook-form";

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SellIcon from '@mui/icons-material/Sell';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SignpostIcon from '@mui/icons-material/Signpost';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import PaletaParentFormasPago from './PaletaParentFormasPago';

const genders = [
  {
    value: 'A',
    label: 'Sucursal Pando',
  },
  {
    value: 'B',
    label: 'Sucursal America',
  },
  {
    value: 'C',
    label: 'Sucursal Salamanca',
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

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#DC3545'),
  backgroundColor: '#DC3545',
  '&:hover': {
    backgroundColor: '#A31826',
  },
}));
const AccesoFormasPago = () => {


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

  const [BDsucursalesList, setBDsucursalesList] = useState<any>([])
  var dataSucursalesJson = [
    {
      id: 1,
      numero: 1,
      colone: 'EFECTIVO',


    },
    {
      id: 2,
      numero: 2,
      colone: 'TARJETA',
    },
    {
      id: 3,
      numero: 2,
      colone: 'TRANSFERENCIA BANCARIA',
    },
    {
      id: 4,
      numero: 2,
      colone: 'EFECTIVO-TARJETA',
    },
    {
      id: 5,
      numero: 2,
      colone: 'GIFT-CARD',
    },
    {
      id: 6,
      numero: 2,
      colone: 'PAGO ONLINE',
    },
    {
      id: 7,
      numero: 2,
      colone: 'EFECTIVO – GIFT CARD',
    },
    {
      id: 8,
      numero: 2,
      colone: 'DESCUENTO SALARIAL',
    }

  ];

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    //call api
    loadDataSucursales()
  }, []);

  //load data suscursales
  const loadDataSucursales = async () => {
    setBDsucursalesList(dataSucursalesJson)
  }

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


      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Excel
        </Typography>

      </Collapse>
      <div style={{
        backgroundColor: '#DC3545', padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'flex-start', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center', marginBottom: '5px'

      }}
      // onClick={handleClick}
      >
        <PersonAddAlt1Icon sx={{ marginLeft: '20px', color: 'white' }} />

        <Typography variant="subtitle1" gutterBottom sx={{
          marginLeft: '15px',
          color: 'white', alignItems: 'center'
        }} >
          Acceso de Formas de pago en Sucursales
        </Typography>

      </div>

      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker sx={{ width: '190px',height:'10px' }}
     

         // label="Basic example"
          //value={value}
          onChange={(newValue) => {
            //setValue(newValue);
            console.log("new vale ",newValue)
          }}
          slotProps={{ textField: { size: 'small' } }} 

        />




      </LocalizationProvider>*/}

      <Box sx={{ width: '100%', backgroundColor: 'white', margin: 'auto', borderRadius: '5px' }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
          <Grid item xs={12} sm={12} md={4} >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '4px', color: '#666666' }}>
                Sucursal
              </Typography>


              <TextField
                id="outlined-select-gender"
                select
                label="Sucursal"
                //label={gender === "" ? "Seleccione una Opción" : ""}
                value={gender}
                onChange={handleChange}
                //  sx={{ width: '100%' }}
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
          </Grid>


          <Grid item xs={12} sm={12} md={4} container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">

            <ColorButton variant="contained" sx={{ marginTop: '34px' }}>Buscar</ColorButton>
          </Grid>
        </Grid>

      </Box>



      <br />



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
      <PaletaParentFormasPago name="Sucursales" color="#EF9A9A" COLOR_R="239" COLOR_G="154" COLOR_B="154"
        rows={dataSucursalesJson}
      />
      <PaletaParentFormasPago name="Pedidos Ya" color="#EF9A9A" COLOR_R="239" COLOR_G="154" COLOR_B="154"
        rows={dataSucursalesJson}
      />

<PaletaParentFormasPago name="Yaigo" color="#EF9A9A" COLOR_R="239" COLOR_G="154" COLOR_B="154"
        rows={dataSucursalesJson}
      />

<PaletaParentFormasPago name="test" color="#EF9A9A" COLOR_R="239" COLOR_G="154" COLOR_B="154"
        rows={dataSucursalesJson}
      />

<PaletaParentFormasPago name="Pedidos Ya" color="#EF9A9A" COLOR_R="239" COLOR_G="154" COLOR_B="154"
        rows={dataSucursalesJson}
      />
      {/*<TablaAccesoFormasPago/>

      <TablaAccesoFormasPago/>
      <TablaAccesoFormasPago/>*/}

      {/*<Demo />*/}


      {/*<Paleta name="test" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />*/}

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

export default AccesoFormasPago