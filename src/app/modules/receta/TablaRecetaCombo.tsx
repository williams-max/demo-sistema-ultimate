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
import { Button, Checkbox, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { AlertSave } from "../../common/alerts/alerts";
import { Controller ,useForm} from "react-hook-form";

/*interface Cell {
  cellIndex: number;
}*/

const tableStyling = {
  //padding: "0px 0px",
  backgroundColor: '#F2F2F2',
  padding: '0.8%',
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
    nombre: "Regular (Tamaño Unico)",
    opcciona: "",
    precio: "Unidad"
  },

  {
    id: 2,
    grupo: "2-Bebidas calientes con café",
    nombre: "Regular (Tamaño Unico)",
    opcciona: "",
    precio: "Unidad"
  },
  {
    id: 3,
    grupo: "3-Bebidas calientes con café",
    nombre: "Regular (Tamaño Unico)",
    opcciona: "",
    precio: "Unidad"
  }

];



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function TablaRecetaCombo(props: any) {
  const { formState, handleSubmit, control, register, getValues, setValue, unregister } = useForm();
  const { tableData, rows, deleteByIndex }: any = props;
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const [listDataSimulation, setListDataSimulation] = useState(dataArray);

  const defaultStyleTitle = true;

  //const [rows, setRows] = React.useState([]);

  //end codigo exitoso
  /*React.useEffect(() => {
    console.log("data ...", tableData)
    if (tableData) setRows(tableData);
  }, [tableData]);*/


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

  const onSubmit = async (data: any) => {
    console.log("enviando datos form ", data)
    AlertSave({ title: "GUARDADO!", message: "registrado correctamente" })
  }


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
                  width: '20%',

                  //backgroundColor: "#BCEAFD",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                Grupo
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '18%', borderLeft: "1px solid white" }} align="left">
                Nombre
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '5%', borderLeft: "1px solid white" }} align="left">
                Opcional
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '12%' }} align="left">
                Precio
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '12%' }} align="left">
                Opcion visual
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '7%' }} align="left">
                Opciones
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid #A7A7A7",
                    // fontWeight: 'bold',
                    backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //  borderBottom: "1px solid white",
                    //fontSize: "12px"
                    fontSize: "0.9rem",
                    //padding:'1%',
                  }}
                  align="left"
                >
                  {row.grupo}
                </TableCell>
                <TableCell
                  sx={{
                    // padding: "0px 0px",
                    paddingLeft: '10px',
                    // fontWeight: 'bold',
                    // borderBottom: "1px solid white",
                    //   borderRight: "1px solid #A7A7A7",
                    //   borderBottom: "1px solid #A7A7A7",
                    backgroundColor: "#C8E6C9",
                    "&:active": { backgroundColor: "blue" }
                  }}
                  align="left"
                  onClick={tableCellClickHandler}
                >
                  {row.nombre}
                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",

                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {/*row.f2*/}
                  <Checkbox sx={{ backgroundColor: 'white', margin: 0, padding: 0 }} {...label} size="small" />
                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    backgroundColor: "#C8E6C9",
                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid white",
                  }}

                  onClick={tableCellClickHandler}
                  align="left"
                >
                  <Controller
                    name={`price0_${index}`}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" //label={label}
                        variant="outlined" sx={{
                          width: '100%',backgroundColor: 'white'
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"

                        inputProps={{
                          style: {
                            margin: 0, padding: '2px'
                          },
                        }}
                      />
                    )}

                    rules={{
                      required:true,
                      /*maxLength: {
                          value: 3,
                          message: 'requiere maximo 3 caracteres'
                      }*/
                    }}
                  />
                
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0px 0px",
                    backgroundColor: "#C8E6C9",// borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid white",
                    paddingLeft: '10px',
                  }}

                  onClick={tableCellClickHandler}
                  align="left"
                >

                  <TextField id="outlined-basic"
                    sx={{ backgroundColor: 'white' }}
                    //label="Outlined"
                    size="small"
                    type="number"
                    variant="outlined"
                    inputProps={{
                      style: {
                        margin: 0, padding: '2px'
                      },
                    }}
                  />

                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",
                    backgroundColor: "#C8E6C9",
                    paddingLeft: '10px',
                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid white",
                  }}

                  //onClick={tableCellClickHandler}
                  align="left"
                >
                  {/*row.f3*/}
                  <DeleteIcon sx={{
                    backgroundColor: '#DC3545', color: 'white', fontSize: '1.5rem', margin: '0'
                    // marginLeft: '10px'
                    , fontWeight: 'bold'
                  }}

                    onClick={() => deleteByIndex(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ backgroundColor: '#DC3741' }}



          variant="contained" startIcon={<SaveIcon />}

          onClick={handleSubmit(onSubmit)}
         
        >
          Guardar Receta
        </Button>

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
