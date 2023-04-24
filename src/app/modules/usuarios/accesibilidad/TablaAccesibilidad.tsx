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
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
//import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import TableViewIcon from '@mui/icons-material/TableView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RecommendIcon from '@mui/icons-material/Recommend';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import EditIcon from '@mui/icons-material/Edit';


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

function createData(f0: any, f1: any, f2: any, f3: any) {
  return { f0, f1, f2, f3 };
}

const rows = [

  createData("1-Bebidas calientes con café", "Regular (Tamaño Unico)", "", "Unidad"),

];

var dataArray = [


  {
    id: 1,
    grupo: "1-Bebidas calientes con café",
    nombre: "ADOLFO MONDOCORRE GIZADA",
    numfact: "1166",
    fechayhora: "10-20-2023 13:45",
    cliente: "LORESA ISSA",
    nit: '5198586',
    pagar: '10'
  },

  {
    id: 2,
    grupo: "2-Bebidas calientes con café",
    nombre: "ADOLFO MONDOCORRE GIZADA",
    numfact: "1166",
    fechayhora: "10-20-2023 13:45",
    cliente: "LORESA ISSA",
    nit: '5198586',
    pagar: '10'
  },
  {
    id: 3,
    grupo: " ",
    nombre: "ADOLFO MONDOCORRE GIZADA",
    numfact: "1166",
    fechayhora: "10-20-2023 13:45",
    cliente: "LORESA ISSA",
    nit: '5198586',
    pagar: '10'
  }

];



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function TablaAccesibilidad() {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const [listDataSimulation, setListDataSimulation] = useState(dataArray);

  const defaultStyleTitle = true;

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

                "& th": {
                  fontSize: "12px",
                  //fontSize: "0.8rem",
                  //  height: "5px",
                  // color: "black",
                  //  borderBottom: "1px solid white",

                }
              }}
            >
              <TableCell sx={{ ...tableStyling, width: '2%', borderLeft: "1px solid white" }} align="left">
                ID
              </TableCell>
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
                Nombre Completo
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%', borderLeft: "1px solid white" }} align="left">
                Doc. Ident
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%', borderLeft: "1px solid white" }} align="left">
                Celular
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '4%' }} align="left">
                Perfil
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '5%' }} align="left">
                Area
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%' }} align="left">
                Cargo
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '5%' }} align="left">
                Ubicaciones
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '2%' }} align="left">
                Opcciones
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {listDataSimulation?.map((row, index) => (
              <TableRow key={index}>

                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    // fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    //paddingLeft: '10px',
                    padding: '0px', margin: '0px',
                    //  borderBottom: "1px solid white",
                    //fontSize: "12px"
                    // fontSize: "0.9rem",
                    //padding:'1%',
                    paddingLeft: '10px',
                    verticalAlign: 'top'

                  }}
                  align="left"
                >
                  {/*row.grupo*/}


                  <Typography variant="subtitle1" gutterBottom sx={{

                    color: 'black', display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-start', fontSize: '13px'
                  }} >
                    12
                  </Typography>

                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    // fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    //paddingLeft: '10px',
                    padding: '0px', margin: '0px',
                    //  borderBottom: "1px solid white",
                    //fontSize: "12px"
                    // fontSize: "0.9rem",
                    //padding:'1%',
                    paddingLeft: '10px',
                    verticalAlign: 'top'
                  }}
                  align="left"
                >
                  {/*row.grupo*/}



                  <Typography variant="subtitle1" gutterBottom sx={{

                    color: 'black', display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-start', fontSize: '13px'
                  }} >
                    {row.nombre}
                  </Typography>





                </TableCell>
                <TableCell
                  sx={{
                    // padding: "0px 0px",
                    paddingLeft: '10px',
                    // fontWeight: 'bold',
                    //   borderBottom: "1px solid white",
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    // borderBottom: "1px solid #A7A7A7",
                    //backgroundColor: "#C8E6C9",
                    "&:active": { backgroundColor: "blue" }
                  }}
                  align="left"
                  onClick={tableCellClickHandler}
                >

                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    verticalAlign: 'top',
                    //borderBottom: "1px solid white",
                    //fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >

                  <Typography variant="subtitle1" gutterBottom sx={{

                    color: 'black', display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-start', fontSize: '13px'
                  }} >
                    5280151
                  </Typography>

                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    //backgroundColor: "#C8E6C9",
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                  }}

                  onClick={tableCellClickHandler}
                  align="left"
                >
                  {/*row.fechayhora*/}


                </TableCell>

                <TableCell
                  sx={{
                    padding: "0px 0px",
                    //backgroundColor: "#C8E6C9",
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    paddingLeft: '10px',
                    verticalAlign: 'top',
                  }}

                  onClick={tableCellClickHandler}
                  align="left"
                >
                  {/*row.cliente*/}

                  <Typography variant="subtitle1" gutterBottom sx={{

                    color: 'black', display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-start', fontSize: '13px'
                  }} >
                    Administración
                  </Typography>

                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    // backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                    verticalAlign: 'top',
                  }}

                  //onClick={tableCellClickHandler}
                  align="left"
                >
                  {/*row.nit*/}
                  Encargado de sistemas
                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                  }}

                  //onClick={tableCellClickHandler}
                  align="left"
                >

                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    //backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    borderRight: "1px solid #A7A7A7",
                    borderBottom: "1px solid #A7A7A7",
                  }}

                  //onClick={tableCellClickHandler}

                  align="left"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <PersonRemoveIcon sx={{ backgroundColor: '#DC3545', color: 'white', fontSize: '2.4rem', padding: '10px', margin: '2px' }} />
                    <EditIcon sx={{ backgroundColor: '#FF8F00', color: 'white', fontSize: '2.4rem', padding: '10px', margin: '2px' }} />
                    <StoreMallDirectoryIcon sx={{ backgroundColor: '#17A2B8', color: 'white', fontSize: '2.4rem', padding: '10px', margin: '2px' }} />
                    <ManageAccountsIcon sx={{ backgroundColor: '#28A743', color: 'white', fontSize: '2.4rem', padding: '10px', margin: '2px' }} />
                  </div>


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
