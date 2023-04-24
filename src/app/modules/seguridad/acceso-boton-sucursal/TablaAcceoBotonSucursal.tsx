import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Checkbox, MenuItem, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
//import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import TableViewIcon from '@mui/icons-material/TableView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RecommendIcon from '@mui/icons-material/Recommend';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";



/*interface Cell {
  cellIndex: number;
}*/

const tableStyling = {
  //padding: "0px 0px",
  backgroundColor: '#F2F2F2',
  padding: '0.8%',
  fontSize: '10px',
  borderRight: "1px solid #A7A7A7",
  borderBottom: "1px solid #A7A7A7",
  //borderRight: "2px solid black",



};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#28A745"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));
function createData(f0: any, f1: any, f2: any, f3: any) {
  return { f0, f1, f2, f3 };
}

const rows = [

  createData("1-Bebidas calientes con café", "Regular (Tamaño Unico)", "", "Unidad"),

];

var dataArray = [


  {
    id: 1,
    numero: 1,
    referencia: 'anular-factura'

  },

  {
    id: 2,
    numero: 2,
    referencia: 'anular-factura'

  },
  {
    id: 2,
    numero: 2,
    referencia: 'anular-factura'

  }

];

const genders = [
  {
    value: 'A',
    label: 'ACTIVO',
  },
  {
    value: 'B',
    label: 'INACTIVO',
  }


];


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function TablaAcceoBotonSucursal() {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const [listDataSimulation, setListDataSimulation] = useState(dataArray);

  const defaultStyleTitle = true;
  const [gender, setGender] = React.useState("");


  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const tableCellClickHandler = (e: any) => {
    //console.log((e.target as Element).innerHTML);
  };

  const tableHeaderClickHandler = (e: any) => {
    console.log("Detected Header Click");
    setSnackbarOpen(true);
    //    if (((e.target as unknown) as Cell).cellIndex) {
    if (((e.target)).cellIndex) {
      setInfoText("data");
    } else {
      setInfoText("title");
    }
  };

  const handleAlertClose = () => {
    setSnackbarOpen(false);
  };
  const handleDelete = (id: any) => {
    // console.log("id a eliminar ", id)
    //econtrar a add
    for (var i = 0; i < dataArray.length; i++) {
      if (id == dataArray[i].id) {
        console.log("find id y estoy en la poscion ", id)

        // const index = dataArray.indexOf(i);
        var arrayAux = [...listDataSimulation]
        setListDataSimulation(arrayAux.splice(i, 1))
        //console.log("aaa", dataArray.splice(i, 1));
        // delete dataArray[i];
      }
    }
    console.log("array data ", listDataSimulation)

  }
  /*
  const myArray = [1, 2, 3, 4, 5];
  
  const index = myArray.indexOf(2);
  
  const x = myArray.splice(index, 1);
  */

  return (
    <div>

      <TableContainer
        onClick={() => {
          console.log("Detected Table Container Click");
        }}
        component={Paper}
        sx={{
          // border: "4px solid rgba(0,0,0,0.2)",
          //padding: 1,
          // height: '420px',
          margin: '0px', padding: '0px', marginTop: '5px'

          //   width: "max-content"
          //backgroundColor: "blue"
        }}
      >
        <Table sx={{ tableLayout: "auto" }}>
          <TableHead onClick={tableHeaderClickHandler} style={{
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
                display:'none',

                "& th": {
                  fontSize: "12px",
                  //fontSize: "0.8rem",
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
                  width: '7%',

                  // backgroundColor: "red",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                N°
              </TableCell>

              <TableCell sx={{ ...tableStyling, width: '10%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '10%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '10%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '10%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {listDataSimulation?.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    // borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    // fontWeight: 'bold',
                    backgroundColor: "#6C757D",
                    paddingLeft: '20px',
                    padding: '0px', margin: '0px',

                    //  borderBottom: "1px solid white",
                    //fontSize: "12px"
                    // fontSize: "0.9rem",
                    //padding:'1%',
                  }}
                  align="left"
                >
                  {/*row.numero*/}

                  <div style={{ display: 'flex', flexDirection: 'row',paddingLeft:'5px' }}>
                    <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                    <Typography variant="subtitle1" gutterBottom sx={{
                      margin: 0, padding: 0, marginLeft: '4px', fontSize: '12px', color: 'white', fontWeight: 'bold'
                   ,minWidth:'70px'
                   }}>
                      Sucursales
                    </Typography>
                  </div>

                </TableCell>

                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    // borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {/*row.numfact*/}

                  <Typography variant="subtitle1" gutterBottom sx={{
                    margin: 0, padding: 0, marginLeft: '4px', fontSize: '12px', color: 'black', fontWeight: 'bold'
                  }}>
                    Envios con Transporte
                  </Typography>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Accion"
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

                    sx={{ width: '100%' }}
                  >
                    {genders.map(option => (
                      <MenuItem key={option.value} value={option.value}

                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    // borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {/*row.numfact*/}

                  <Typography variant="subtitle1" gutterBottom sx={{
                    margin: 0, padding: 0, marginLeft: '4px', fontSize: '12px', color: 'black', fontWeight: 'bold'
                  }}>
                    Venta Programada
                  </Typography>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Accion"
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

                    sx={{ width: '100%' }}
                  >
                    {genders.map(option => (
                      <MenuItem key={option.value} value={option.value}

                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    // borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {/*row.numfact*/}

                  <Typography variant="subtitle1" gutterBottom sx={{
                    margin: 0, padding: 0, marginLeft: '4px', fontSize: '12px', color: 'black', fontWeight: 'bold'
                  }}>
                    Descuento Facturado
                  </Typography>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Accion"
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

                    sx={{ width: '100%' }}
                  >
                    {genders.map(option => (
                      <MenuItem key={option.value} value={option.value}

                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    // borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {/*row.numfact*/}

                  <Typography variant="subtitle1" gutterBottom sx={{
                    margin: 0, padding: 0, marginLeft: '4px', fontSize: '12px', color: 'black', fontWeight: 'bold'
                  }}>
                    Descuento Tradicional
                  </Typography>
                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Accion"
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

                    sx={{ width: '100%' }}
                  >
                    {genders.map(option => (
                      <MenuItem key={option.value} value={option.value}

                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          This is a {infoText} column.
        </Alert>
      </Snackbar>
    </div>
  );
}
