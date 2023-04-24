import { CardActionArea, Checkbox, Collapse, FormControlLabel, FormGroup, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Controller, useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'

import TablaUsuarioGeneral from './TablaUsuarioGeneral';
//import useTableCollapse from '../../../hooks/useTableCollapse';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import LockSharpIcon from '@mui/icons-material/LockSharp';

const PaletaParentConsolidados = (props: any) => {
  const { name, color, COLOR_R, COLOR_G, COLOR_B } = props;

  const { formState, handleSubmit, control, register, getValues } = useForm();
 // const { checkActivo, manejarCehck } = useTableCollapse();




  const [openOne, setOpenOne] = useState(true);

  const [checkInactivo, setCheckInactivo] = useState(false)

  const handleClick = () => {
    setOpenOne(!openOne);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  //rgba(${COLOR_R}, ${COLOR_G},${COLOR_B}, 0.6 )

  const getChecksInformation = () => {
    console.log("get values: ", getValues())
  }

  const handleCheckInactivo = () => {

    // e.stopPropagation();
    // console.log("target value ", e.target.checked)
    // manejarCehck(e.target.checked)


    //deleteNotification(notification.id)
    //var captureValue = 
    //console.log("valor  ",captureValue)
    // setCheckInactivo(!e.target.checked)
    //save in local store value del father
    //conver value


    localStorage.setItem("inactivo_parent", (!checkInactivo).toString());
    setCheckInactivo(!checkInactivo)
    //setCheckInactivo(e.target.checked)


    // localStorage.setItem("inactivo_parent", (e.target.checked).toString());

    // e.stopPropagation();
    //e.preventDefault();

  }
  return (
    <>
     {/*<button onClick={() => console.log("check Activo provider ", checkActivo)}>estado actual</button>*/}
      <div style={{ margin: 'auto', width: '100%' }}>
        <div style={{
          backgroundColor: `rgba( ${COLOR_R}, ${COLOR_G},${COLOR_B}, 0.6 )`, padding: '0.3%', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
          , alignItems: 'center'

        }}
        //onClick={getChecksInformation}
        >
          <div style={{display:'flex',flexDirection:'row',width:'47%',justifyContent:'space-between'
        }}>
            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'black' }} >
              {name}
            </Typography>

            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
              {checkInactivo ?
                <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px',
                }} onClick={() => handleCheckInactivo()}
                >

                  <LockSharpIcon />
                </CardActionArea> : <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px',
                }} onClick={() => handleCheckInactivo()}
                >
                  <LockOpenRoundedIcon />
                </CardActionArea>}
            </FormGroup>
          </div>



          {/*<FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              control={
                <Checkbox  {...label} defaultChecked />
              }
              label="Activo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkInactivo}
                  onChange={handleCheckInactivo}
                //onClick={(e) => handleCheckInactivo(e)}


                />
              }

              label="Inactivo"
            />

        

            </FormGroup>}*/}
          {/*  <RemoveIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />*/}
          {!openOne ?

            <CardActionArea sx={{
              paddingBottom: '0', margin: '0', width: '25px',
            }}
              onClick={handleClick}
            > <AddIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />
            </CardActionArea> :

            <CardActionArea sx={{
              paddingBottom: '0', margin: '0', width: '25px',
            }} onClick={handleClick}>

              <RemoveIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />
            </CardActionArea>
          }

        </div>
      </div >


      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <div style={{ margin: 'auto', width: '98%' }}>


          <TablaUsuarioGeneral />

        </div>


      </Collapse>

      {/*<details>
        <summary>Collpase Father</summary>
        <TablaUsuarioGeneral />
      </details>*/}
    </>
  )
}

/*
 <details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
*/

export default PaletaParentConsolidados
