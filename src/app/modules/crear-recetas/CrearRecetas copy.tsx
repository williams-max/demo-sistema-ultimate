import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import Paleta from '../../../core/components/common/Paleta'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { padding } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { number } from 'prop-types';
import Swal from 'sweetalert2';
import { Controller, useForm } from "react-hook-form";

const CrearRecetas = () => {
  const { formState, handleSubmit, control, register, getValues, setValue } = useForm();


  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };
  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },

  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('vaso', 56, 2, 2, 2),
  ];

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const AlertaGuardar = () => {
    Swal.fire(
      'GUARDADO!',
      'Se ha Guardado la Receta!',
      'success'
    )
  }

  const AlertaBorrar = () => {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido Eliminado.',
          'success'
        )
      }
    })
  }

  const getTest = () => {
    console.log("work")
    console.log("res ", getValues())
  }

  const  manajarCheckTest =  (event:any) => {
    if(event.target.checked){
      // poner en true los  demas checks
      setValue("check_0",true)
    }else {
      // poner el falso los demas chesk
      setValue("check_0",false)
    }
  }

  return (
    <>
      <div style={{
        backgroundColor: `#DC3545`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
        onClick={() => getTest()}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Receta
        </Typography>
      </div>
      <br></br>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ margin: "5px" }}>Categoria</h5>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params}
              size="small"
              label="Seleccione categoria" />}
          />
        </div>
        &nbsp; &nbsp;
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ margin: "5px" }}>SubCategoria</h5>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params}
              size="small"
              label="Seleccione la segunda categoria" />}
          />
        </div>
        &nbsp; &nbsp;
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ margin: "5px" }}>Seleccione el producto</h5>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params}
              size="small"
              label="--Seleccione una opcion--" />}
          />
        </div>
        &nbsp; &nbsp;
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ margin: "5px" }}>Seleccione la Presentacion</h5>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params}
              size="small"
              label="--Seleccione una opcion--" />}
          />
        </div>
        &nbsp; &nbsp;
        <div style={{ flexDirection: 'column' }}>
          <div>
            <p></p>
          </div>
          <div style={{ display: '10px', flexDirection: 'row', justifyContent: 'center' }}>
            <Button sx={{ backgroundColor: '#D32F2F' }} variant="contained" ><AddIcon /></Button>
            &nbsp; &nbsp;
            <Button variant="contained" color="primary"><DriveFileRenameOutlineIcon /></Button>
          </div>
        </div>
      </div>

      <br></br>
      <div style={{ display: "flex" }}>
        <Button onClick={handleOpen} sx={{ backgroundColor: '#D32F2F' }} variant="contained" startIcon={<AddIcon />}>Agregar</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
              <Button onClick={handleClose} style={{ color: 'black' }}>X</Button>
            </div>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              NUEVO ELEMENTO DE LA RECETA
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ margin: "5px" }}>Seleccione Elementos</h4>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params}
                  size="small"
                  label="--Seleccione una opcion--" />}
              />
            </div>
            <br></br>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
              <Button sx={{ backgroundColor: '#d50000' }} variant="contained" >Agregar</Button>
              &nbsp; &nbsp;
              <Button onClick={handleClose} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cerrar</Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><Typography style={{ fontWeight: 'bold' }}>Nombre</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Es Fruta</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Para Mesa</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Para Llevar</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Mandatorio</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Perecedero</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}>Medida</Typography></TableCell>
                <TableCell align="center"><Typography style={{ fontWeight: 'bold' }}><h5>Eliminar</h5></Typography></TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                
                          <Checkbox
                      
                         
                            onChange={(e) => manajarCheckTest(e)}
                          />
                       
                 
                  </TableCell>
                  <TableCell align="center">

                   
                        <Controller
                        name={`check_${index}`}
                        control={control}
                        render={({ field: props }) => (
                          <Checkbox
                            {...props}
                            //checked={props.value}
                            checked={!!props.value}
                            onChange={(e) => props.onChange(e.target.checked)}
                          />
                        )}
                      />
                   
                  


                  </TableCell>
                  <TableCell align="center">
                  <Controller
                        name={`check_${index}`}
                        control={control}
                        render={({ field: props }) => (
                    <Checkbox 
                      {...props}
                      //checked={props.value}
                      checked={!!props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                    )}
                    />
                  </TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center" ><TextField type="number"></TextField></TableCell>
                  <TableCell align="center"><Button onClick={AlertaBorrar} sx={{ backgroundColor: '#d50000' }} variant="contained" ><DeleteIcon /></Button> </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
             <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                
                          <Checkbox
                      
                         
                            onChange={(e) => manajarCheckTest(e)}
                          />
                       
                 
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox/>
                  </TableCell>
                  <TableCell align="center">
                   <Checkbox/>
                  </TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center"><Checkbox /></TableCell>
                  <TableCell align="center" ><TextField type="number"></TextField></TableCell>
                  <TableCell align="center"><Button onClick={AlertaBorrar} sx={{ backgroundColor: '#d50000' }} variant="contained" ><DeleteIcon /></Button> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>

        <Button onClick={AlertaGuardar} sx={{ backgroundColor: '#28A745' }} variant="contained" startIcon={<SaveIcon />}>Guardar</Button>
      </div>

    </>


  )

}
export default CrearRecetas