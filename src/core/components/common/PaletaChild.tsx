import { Collapse, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState, useEffect } from 'react'
import TablaInventarioCierre from '../../../app/modules/inventario-cierre/TablaInventarioCierre';
import TablaSolicitudes from '../../../app/modules/solicitudes/TablaSolicitudes';


const PaletaChild = (props: any) => {
  const { name, color, COLOR_R, COLOR_G, COLOR_B } = props;

  console.log(" aaa ", COLOR_R, COLOR_G, COLOR_B)

  const [openOne, setOpenOne] = useState(false);

  const handleClick = () => {
    setOpenOne(!openOne);
  };

  //rgba(${COLOR_R}, ${COLOR_G},${COLOR_B}, 0.6 )

  return (
    <>
      <div style={{ margin: 'auto', width: '98%' }}>
        <div style={{
          backgroundColor: `rgba( ${COLOR_R}, ${COLOR_G},${COLOR_B}, 0.6 )`, padding: '0.3%', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
          , alignItems: 'center'

        }}
          onClick={handleClick}
        >
          <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
            {/*name*/}  child
          </Typography>
          {/*  <RemoveIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />*/}
          {!openOne ? <AddIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} /> :
            <RemoveIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />}

        </div>
      </div>


      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <div style={{ margin: 'auto', width: '96%' }}>
          {/*<TablaInventarioCierre />*/}

          <TablaSolicitudes />
        </div>


      </Collapse>
    </>
  )
}

export default PaletaChild
