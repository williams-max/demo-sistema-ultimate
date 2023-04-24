import { Collapse, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import PaletaChildEntrega from './PaletaChildEntrega';

const PaletaEntrega = (props: any) => {
  const { name, color } = props;

  const [openOne, setOpenOne] = useState(false);

  const handleClick = () => {
    setOpenOne(!openOne);
  };

  return (
    <>
      <div style={{
        backgroundColor: `${color}`, padding: '0.3%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
        onClick={handleClick}
      >
        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          {name}
        </Typography>
        {!openOne ? <AddIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} /> :
          <RemoveIcon style={{ backgroundColor: '#DC3545', borderRight: '5px', color: 'white' }} />}


      </div>


      <Collapse in={openOne} timeout="auto" unmountOnExit>

        <PaletaChildEntrega color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />
      </Collapse>
    </>
  )
}

export default PaletaEntrega