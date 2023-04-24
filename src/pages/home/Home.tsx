import React from 'react'
import MuiNavbar from '../../core/components/navbar/MuiNavbar'
import exportFromJSON from 'export-from-json'



const Home = () => {

  const exportDataJson = () => {


    
    if (localStorage.getItem("user_menu")) {
      let data_menu = localStorage.getItem("user_menu");
      if (data_menu) {
        console.log("data menu ", JSON.parse(data_menu));

   
        const data=JSON.parse(data_menu)
        const fileName = 'datos'
        const exportType = exportFromJSON.types.json
    
        exportFromJSON({ data, fileName, exportType })
        //SUBNIVEL = [...JSON.parse(data_menu)]

        //console.log("test list ", SUBNIVEL)
      }
    }

  
  }

  return (

    <>
      <MuiNavbar>
        <div>Bienvenido</div>
 
      </MuiNavbar>
    </>
  )
}

export default Home