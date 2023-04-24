import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, useForm } from "react-hook-form";
import { Autocomplete, Box, Button, Checkbox, Modal, TextField, Typography } from "@mui/material";
import Swal from 'sweetalert2';
import AddIcon from '@mui/icons-material/Add';
import { AlertSave } from "../../common/alerts/alerts";



/*interface Cell {
  cellIndex: number;
}*/
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


const tableStyling = {
  //padding: "0px 0px",
  backgroundColor: '#F2F2F2',
  padding: '0.8%',
  borderLeft: "1px solid #DEE2E6",
  //borderRight: "2px solid black",



};

function createData(f0: any, f1: any, f2: any, f3: any) {
  return { f0, f1, f2, f3 };
}
/*
const rows = [

  createData("Galleta de Alfajor", "Unidad", "", "0"),
  createData("Galleta de Alfajor", "Unidad", "", "0"),

];*/



export default function TablaCrearReceta() {
  const { formState, handleSubmit, control, register, getValues, setValue, unregister } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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



  const tableCellClickHandler = (e: any) => {
    //console.log((e.target as Element).innerHTML);
  };

  const [rows, setRows] = useState<any>([])

  //paso 1 cargar datos al inicio
  useEffect(() => {

  }, []);

  /*
  const rows = [

    { nombre: "Galleta de Alfajor" }

  ];*/





  //metodo para agregar elementos
  const addItem = () => {
    console.log("Añadiendo")


    setRows([...rows,
    { nombre: "Galleta de Alfajor" }
    ]);
  }

  //metodo para eliminar elementos
  const deleteByIndex = (index: any) => {
    console.log("eliminar ", index)


    //eliminar la referencia datos ya creado al momento de eliminar
    //exameple  unregister("yourDetails")
    unregister(`check0_${index}`)
    unregister(`check1_${index}`)
    unregister(`check2_${index}`)
    unregister(`check3_${index}`)
    unregister(`check4_${index}`)
    unregister(`check5_${index}`)

    setRows((oldValues: any) => {
      return oldValues.filter((_: any, i: any) => i !== index)
    })
  }
  //metodo para seleccionar todos los elementos con check por fila

  const selectAllCheckByRow = (event: any, index: any) => {
    var checkedValue = event.target.checked
    console.log("valos necesarios ,", index, checkedValue)
    //index 0 ,rows 0
    //index 1, rows 1

    //escribir logica para hacer check todos los campos
    //index es dato genereico

    if (checkedValue) {
      setValue(`check0_${index}`, true)
      setValue(`check1_${index}`, true)
      setValue(`check2_${index}`, true)
      setValue(`check3_${index}`, true)
      setValue(`check4_${index}`, true)
      setValue(`check5_${index}`, true)
    } else {
      setValue(`check0_${index}`, false)
      setValue(`check1_${index}`, false)
      setValue(`check2_${index}`, false)
      setValue(`check3_${index}`, false)
      setValue(`check4_${index}`, false)
      setValue(`check5_${index}`, false)
    }


  }
  const saveData = () => {
    console.log("datos save ", getValues())
    AlertSave({ title: "GUARDADO!", message: "Se ha Guardado la Receta!" });
  }

  const [selectElement, setSelectElement] = useState<any>('')
  const addNewElement = () => {
    console.log("add ", selectElement)
    if (selectElement) {
      const { label } = selectElement
      console.log("hay dato ", label)
      setRows([...rows,
      { nombre: label }
      ]);

    }

  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: '#D32F2F' }} variant="contained" startIcon={<AddIcon />}>Agregar</Button>
      {/*<button onClick={() => addItem()}>Add</button>*/}
      <TableContainer
        onClick={() => {
          console.log("Detected Table Container Click");
        }}
        component={Paper}
        sx={{
          // border: "4px solid rgba(0,0,0,0.2)",
          //padding: 1,
          // height: '420px',
          margin: '0px', padding: '0px', marginTop: '5px',


          //   width: "max-content"
          //backgroundColor: "blue"
        }}
      >
        <Table sx={{ tableLayout: "auto", minWidth: '800px' }}>
          <TableHead style={{
            //  borderTopColor: 'black',
            //  borderTopStyle: 'double'
          }}>
            <TableRow
              onClick={() => {
                console.log("Detected Row Click");
              }}
              sx={{
                //  backgroundColor: "#BCEAFD",
                //borderBottom: "2px solid black",

                "& th": {
                  //fontSize: "1rem",
                  fontSize: "0.8rem",
                  //  height: "5px",
                  // color: "black",
                  //  borderBottom: "1px solid white",

                }
              }}
            >
              <TableCell
                onClick={() => {
                  console.log("Detected Cell Click");
                }}
                sx={{
                  ...tableStyling,
                  width: '15%',

                  //backgroundColor: "#BCEAFD",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                Nombre
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Es Fruta
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Para Mesa
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Para Llevar
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Mandatorio
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Perecedero
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Medida
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '5%' }} align="left">
                Eliminar
              </TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: any) => {
              // console.log("index ", index)


              return (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      //padding: "0px 0px",
                      // borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid #A7A7A7",
                      // fontWeight: 'bold',
                      //   backgroundColor: "white",
                      paddingLeft: '10px',
                      //  borderBottom: "1px solid white",
                      //fontSize: "12px"
                      fontSize: "0.9rem",
                      //padding:'1%',
                    }}
                    align="left"
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      {row.nombre}

                      <Checkbox

                        //checked={props.value}
                        sx={{ padding: 0, margin: 0 }}
                        size="small"
                        onChange={(e: any) => selectAllCheckByRow(e, index)}

                      //onChange={(e: any) => console.log(e.target.checked)}
                      />
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      // padding: "0px 0px",
                      paddingLeft: '10px',
                      // fontWeight: 'bold',
                      // borderBottom: "1px solid white",
                      //   borderRight: "1px solid #A7A7A7",
                      //   borderBottom: "1px solid #A7A7A7",
                      //  "&:active": { backgroundColor: "blue" }
                    }}
                    align="left"
                    onClick={tableCellClickHandler}
                  >
                    <Controller
                      name={`check0_${index}`}
                      control={control}
                      render={({ field: props }: any) => (
                        <Checkbox
                          {...props}
                          //checked={props.value}
                          sx={{ padding: 0, margin: 0 }}
                          size="small"
                          checked={!!props.value}
                          onChange={(e: any) => props.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 0px",

                      // borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid #A7A7A7",
                      fontWeight: 'bold',
                      backgroundColor: "white",
                      paddingLeft: '10px',
                      //borderBottom: "1px solid white",
                      fontSize: "12px"
                      // fontSize: "1.1rem"
                    }}
                    align="left"
                  >
                    <Controller
                      name={`check1_${index}`}
                      control={control}
                      render={({ field: props }: any) => (
                        <Checkbox
                          {...props}
                          //checked={props.value}
                          sx={{ padding: 0, margin: 0 }}
                          size="small"
                          defaultChecked
                          checked={!!props.value}
                          onChange={(e: any) => props.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid white",
                      paddingLeft: '10px',
                    }}

                    onClick={tableCellClickHandler}
                    align="left"
                  >
                    <Controller
                      name={`check2_${index}`}
                      control={control}
                      render={({ field: props }: any) => (
                        <Checkbox
                          {...props}
                          //checked={props.value}
                          sx={{ padding: 0, margin: 0 }}
                          size="small"
                          checked={!!props.value}
                          onChange={(e: any) => props.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid white",
                      paddingLeft: '10px',
                    }}

                    onClick={tableCellClickHandler}
                    align="left"
                  >
                    <Controller
                      name={`check3_${index}`}
                      control={control}
                      render={({ field: props }: any) => (
                        <Checkbox
                          {...props}
                          //checked={props.value}
                          sx={{ padding: 0, margin: 0 }}
                          size="small"
                          checked={!!props.value}
                          onChange={(e: any) => props.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid white",
                      paddingLeft: '10px',
                    }}

                    onClick={tableCellClickHandler}
                    align="left"
                  >
                    <Controller
                      name={`check4_${index}`}
                      control={control}
                      render={({ field: props }: any) => (
                        <Checkbox
                          {...props}
                          //checked={props.value}
                          sx={{ padding: 0, margin: 0 }}
                          size="small"
                          checked={!!props.value}
                          onChange={(e: any) => props.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid white",
                      paddingLeft: '10px',
                    }}

                    onClick={tableCellClickHandler}
                    align="left"
                  >
                    <TextField id="outlined-basic" label="Medida" variant="outlined"
                      size="small"
                    />
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                      // borderBottom: "1px solid white",
                      paddingLeft: '10px',
                    }}

                    onClick={tableCellClickHandler}
                    align="left"
                  >
                    <DeleteIcon sx={{
                      backgroundColor: '#DC3545', color: 'white', fontSize: '2.3rem',
                      padding: '10px',
                    }}

                      onClick={() => deleteByIndex(index)}
                    />
                  </TableCell>




                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>


      <Button onClick={saveData} sx={{ backgroundColor: '#28A745' }} variant="contained" startIcon={<SaveIcon />}>Guardar</Button>

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
              onChange={(event, value: any) => setSelectElement(value)}
              renderInput={(params) => <TextField {...params}
                size="small"
                label="--Seleccione una opcion--" />}
            />
          </div>
          <br></br>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
            <Button sx={{ backgroundColor: '#d50000' }} variant="contained"
              onClick={addNewElement}
            >Agregar</Button>
            &nbsp; &nbsp;
            <Button onClick={handleClose} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cerrar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
