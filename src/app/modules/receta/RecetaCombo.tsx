import { Typography, Button, Collapse, TextField, Modal, Grid } from '@mui/material'
import React, { useState,useEffect } from 'react'
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
import SearchIcon from '@mui/icons-material/Search';
import TableViewIcon from '@mui/icons-material/TableView';



import { ModalPersonalized } from './components/ModalPersonalized';
import TablaRecetaCombo from './TablaRecetaCombo';
import { ModalForm } from './components/ModalForm';
import Demo from './components/Demo';
import { ModalTabla } from './components/ModalTabla';
import dataRecetaComboJson from '../../../data/m-recetas/crear-receta-combo/dataRecetaComboJson.json'
import { AlertSave } from '../../common/alerts/alerts';

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

const RecetaCombo = () => {


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

  const [originalRows, setoriginalRows] = useState<any>([])


  const [rows, setRows] = useState<any>(originalRows);
  const [searched, setSearched] = useState<string>("");


  const requestSearch = (searchedVal: string) => {
    //console.log("serach  ", searchedVal)
    setSearched(searchedVal);
    const filteredRows = originalRows.filter((row: any) => {
      return row.nombre.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("");
  };


  //star llamar a api
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  }, []);

  const loadData = async () => {
    console.log("receta data data ", dataRecetaComboJson)
    setRows(dataRecetaComboJson)
    setoriginalRows(dataRecetaComboJson)
  }

  //end llamar a la api

  const deleteByIndex = (index: any) => {
    console.log("eliminar ", index)
    setRows((oldValues: any) => {
      return oldValues.filter((_: any, i: any) => i !== index)
    })

    AlertSave({ title: "", message: "Se ha quitadado el elemento del combo" });
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
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      // onClick={handleClick}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Receta Combo
        </Typography>

      </div>

      <div style={{
        padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'start'
        , alignItems: 'end',

      }}
      // onClick={handleClick}
      >
        <div style={{
          width: '20%', padding: '0px', margin: '0px', display: 'flex',
          flexDirection: 'column', justifyContent: 'start', alignContent: 'start'
        }}>
          <h6 style={{ padding: '0px', margin: '0px', marginBottom: '10px' }}>Menu Combo</h6>

          <TextField
            id="outlined-select-gender"
            select
            label="Menu Combo"
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
        <SearchIcon sx={{ backgroundColor: '#28A745', color: 'white', fontSize: '2.6rem', padding: '10px', margin: '5px' }}
          onClick={handleOpenModal}
        />

        <AddIcon sx={{ backgroundColor: '#DC3545', color: 'white', fontSize: '2.6rem', padding: '10px', margin: '5px' }}
          onClick={handleOpenModalTres}
        />
        <CleaningServicesRoundedIcon sx={{
          backgroundColor: '#17A2B8', color: 'white', fontSize: '2.6rem', padding: '10px', margin: '5px'
        }} onClick={handleOpenModalDos} />

        <TableViewIcon sx={{
          backgroundColor: '#17A2B8', color: 'white', fontSize: '2.6rem', padding: '10px', margin: '5px'
        }} onClick={handleOpenModalCuatro} />





        {/*<Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Solicitudes
        </Typography>*/}

      </div>

      <br />

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <div >
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
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div >
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
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div >
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
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div >
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
          </Grid>

        </Grid>
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
      <TablaRecetaCombo    rows={rows}
        deleteByIndex={(index: any) => deleteByIndex(index)} />

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

export default RecetaCombo