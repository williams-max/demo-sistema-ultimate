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
import { Box, Button, CardActionArea, Checkbox, MenuItem, TextField, Typography } from "@mui/material";
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


import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';


import TablaChildUsuarioGeneral from "./TablaChildUsuarioGeneral";
import { Controller, useForm } from "react-hook-form";

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
    colone: 'SUCURSALES*',
    referencia: 'anular-factura'

  },

  {
    id: 2,
    numero: 2,
    colone: 'C. INTERNOS',
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


export default function TablaUsuarioGeneral(props: any) {

  console.log("props ", props);
  //checkInactivo
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const [listDataSimulation, setListDataSimulation] = useState(dataArray);

  const defaultStyleTitle = true;
  const [gender, setGender] = React.useState("");


  const handleChange = (event: any) => {
    setGender(event.target.value);
  };


  const [openOne, setOpenOne] = useState(false);

  const handleClick = () => {
    console.log("click demo")
    setOpenOne(!openOne);
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


  //obteniendo datos 

  const { formState, handleSubmit, control, register, getValues, setValue } = useForm();

  var inactivo_parent: any = localStorage.getItem("inactivo_parent");
  const [valHead, setValHead] = useState(false)

  const devolverValorCheck = () => {
    console.log(" valor recuperado en tabla usuario general *****", inactivo_parent)
    // console.log(" get ... ", getValues())
    if (inactivo_parent) {
      inactivo_parent = JSON.parse(inactivo_parent)
      if (inactivo_parent == true) {
        setValHead(true)
     //   setValue("inactivo_parent_suc", true)
      } else {
      //  setValue("inactivo_parent_suc", false)
      setValHead(false)
      }
      console.log("resuldato de conversion ", inactivo_parent)
    }
  }
  useEffect(() => {

    devolverValorCheck()



    // actulizar este valor inactivo_parent_suc
  }, [inactivo_parent]);
  //1 Verficar si es el valor es undefinido y
  //2 Si es unddefnie no hizo check el usuario
  //3 Si es distindo de indefinido 
  //4 Manejar el metodo de controlar todas los checks de false a true

  const history: any = [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3,
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1,
    },
  ]
  function Row(props: any) {
    const { row, index } = props;


    //const [open, setOpen] = React.useState(true);
    const f_valueInitCollpase = () => {
      var open_local = localStorage.getItem("open_local");
      console.log("open local ", open_local)
      if (open_local && open_local != undefined) {
        var open_local_aux = JSON.parse(open_local)
        return open_local_aux;
      } else {
        return false
      }

    }
    // const [open, setOpen] = React.useState(() => f_valueInitCollpase());
    const [open, setOpen] = React.useState(true);

    const controlOpenCollpase = () => {
      setOpen(!open)
      localStorage.setItem("open_local", (!open).toString());
      console.log("recuevy data the father ", getValues())

      console.log(" valor recuperado en tabla usuario general Collapse*****", inactivo_parent)
      //setValue('inactivo_parent_suc',false)
    }




    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell sx={{// backgroundColor: 'red',
            width: '4%', padding: "0px 0px",
          }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => controlOpenCollpase()}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              // backgroundColor: 'yellow',
              //  borderRight: "1px solid #A7A7A7",
              //  borderBottom: "1px solid #A7A7A7",
              fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              paddingLeft: '2%',
              //borderBottom: "1px solid white",
              fontSize: "12px",
              width: '20%'
              // fontSize: "1.1rem"
            }}
            align="left"
          >
            {row.colone}


          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",

              // borderRight: "1px solid #A7A7A7",
              //     borderBottom: "1px solid #A7A7A7",
              fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              //
              // borderBottom: "1px solid red",
              fontSize: "12px",
              width: '27%',
              //   backgroundColor: 'coral'
              // fontSize: "1.1rem"
            }}
            align="left"
          >

            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
      
              {valHead == true ?
                <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px', 
                }} onClick={() => console.log("valor de ini ", inactivo_parent)}
                >

                  <LockSharpIcon />
                </CardActionArea> :
                <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px', 
                }} onClick={() => console.log("valor de ini333 ", inactivo_parent)}
                >
                  <LockOpenRoundedIcon />
                </CardActionArea>}
            </FormGroup>


            {/*  <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel
                control={
                  <Checkbox  {...label} defaultChecked />
                }
                label="Activo"
              />
     

              <FormControlLabel
                control={
                  <Controller
                    name={"inactivo_parent_suc"}
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
                }
                label={"Inactivo"}
              />

            </FormGroup>*/}
          </TableCell>


        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" >
              <Box sx={{ margin: 1 }}>

                <TablaChildUsuarioGeneral />


              </Box>
            </Collapse>
            {/*<details>
              <summary>Epcot Center</summary>
              <TablaChildUsuarioGeneral />
            </details>*/}
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  /*
  <details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
  */
  return (
    <div style={{ margin: 0, padding: 0 }}>

      {/*<div style={{
        backgroundColor: '#EF9A9A', padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px'
        , alignItems: 'center', marginBottom: '5px'

      }}
       onClick={handleClick}
      >


        <Typography variant="subtitle1" gutterBottom sx={{
          marginLeft: '15px',
          color: 'black', alignItems: 'center'
        }} 
  
        //onClick={handleClick}
        >
          VENTAS
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

          sx={{ width: '25.6%', backgroundColor: 'white', borderRadius: '5px' }}
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}

            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>*/}


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
          {/*<TableHead onClick={tableHeaderClickHandler} style={{
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
                display: 'none',

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
                  width: '1%',

                  // backgroundColor: "red",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                N°
              </TableCell>


              <TableCell sx={{ ...tableStyling, width: '20%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>


            </TableRow>
          </TableHead>*/}
          <TableBody>
            {listDataSimulation?.map((row: any, index: any) => (
              <Row key={index} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>




    </div>
  );
}
