
import React, { useState, useEffect ,Fragment} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import ListSubheader from '@mui/material/ListSubheader';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Paleta from '../common/Paleta';
import InventarioCierre from '../../../app/modules/inventario-cierre/InventarioCierre';
import Solicitudes from '../../../app/modules/solicitudes/Solicitudes';
import RevisionPedido from '../../../app/modules/revision-pedido/RevisionPedido';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

import { useNavigate } from 'react-router-dom';

import pruebaDatos from "../../../data/datos.json";

import routersArrayExistentes from "../../../data/rutas.json";

//import fitnessTricpes from "../../data/Triceps";



const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  // backgroundColor:'black',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#383737',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: '#383737',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    //  backgroundColor:'red',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      //  backgroundColor:'green'
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      // backgroundColor:'green'
    }),
  }),
);

const items = [
  {
    title: "VENTAS",
    items: [{
      title: "SUCURSALES",
      items: [{
        title: "sucursal pando"
      },
      { title: "surcusal salmanca" },
      { title: "Sucursal América Oeste" },
      { title: "Sucursal Hupermall" },
      { title: "Sucursal Lincoln" }
      ]
    }]
  },
  {
    title: "PEDIDIOS",
    items: [{ title: "Pedidos extraordinarios" },
    { title: "Cronograma Entrega" },
    { title: "Permisos email" },
    {
      title: "PLANTA",
      items: [{
        title: "Pedidos consolidados"
      },
      { title: "despacho" }]
    },
    {
      title: "SUCURSAL DE PRUEBA",
      items: [{
        title: "Inventario de Cierre"
      },
      { title: "Solicitudes" }]
    }
    ]
  },
  {
    title: "REPORTES",
    items: [{
      title: "SUCURSALES",
      items: [{
        title: "sucursal pando"
      },
      { title: "surcusal salmanca" },
      { title: "Sucursal América Oeste" },
      { title: "Sucursal Hupermall" },
      { title: "Sucursal Lincoln" }
      ]
    }]
  },
  {
    title: "RECETAS",
    items: [{ title: "subitem" }, { title: "subitem" }]
  },
  {
    title: "CONFIGURACIONES",
    items: [{ title: "subitem" }, { title: "subitem" }]
  },
  {
    title: "CLIENTES",
    items: [{ title: "subitem" }, { title: "subitem" }]
  },
  {
    title: "SEGURIDAD",
    items: [{ title: "subitem" }, { title: "subitem" }]
  },
  {
    title: "USUARIOS",
    items: [{ title: "subitem" }, { title: "subitem" }]
  },
  {
    title: "PERFILES",
    items: [{ title: "subitem" }, { title: "subitem" }]
  }
];

export default function MiniDrawer({ children }: any) {

  const navigate = useNavigate();



  // var data_menu = localStorage.getItem('user_menu');
  //console.log("data menu ",data_menu)
  //var SUBNIVEL:any = [];

  const [SUBNIVEL, SET_SUBNIVEL] = useState<any>(pruebaDatos)
  //const [SUBNIVEL, SET_SUBNIVEL] = useState<any>([])
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    /*
        if (localStorage.getItem("user_menu")) {
          let data_menu = localStorage.getItem("user_menu");
          if (data_menu) {
            console.log("data menu ", JSON.parse(data_menu));
            SET_SUBNIVEL(JSON.parse(data_menu))
        
          }
        }
    */



  }, []);



  const [openOne, setOpenOne] = React.useState(true);

  const [windowStatus, setWindowStatus] = React.useState({
    solicitudesStatus: true,
  })

  const handleClick = () => {
    setOpenOne(!openOne);
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const controlGeneretionsIcons = (controlIndex: any) => {
    if (controlIndex) {
      if (controlIndex == 1) {
        return generateRamdonIcons();
      }
      if (controlIndex == 2) {
        return generateRamdonIcons();
      }
      if (controlIndex == 3) {

        //icon de sub level 3
        return <TripOriginIcon sx={{
          color: 'white', fontSize: '11px',
        }} />
        //  return generateRamdonIcons();
      }
    }

  }
/*Busdcando iconos 
HomeIcon
import ApartmentIcon from '@mui/icons-material/Apartment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ShieldIcon from '@mui/icons-material/Shield';
import PersonIcon from '@mui/icons-material/Person';


*/

  const generateRamdonIcons = () => {
    var numberRamdon = getRandomInt(3)


    switch (numberRamdon) {
      case 0:
        // console.log('Oranges are $0.59 a pound.');
        return <HomeIcon sx={{ color: 'white' }} />
        break;
      case 2:
        return <StoreIcon sx={{ color: 'white' }} />
        break;
      case 3:
        return <LocalMallIcon sx={{ color: 'white' }} />
        break;
      case 4:
        return <NextWeekIcon sx={{ color: 'white' }} />
        break;
      default:
        //console.log(`Sorry, we are out of ${numberRamdon}.`);
        return <HomeIcon sx={{ color: 'white' }} />
    }
  }

  function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  const controlRoutersNavigation = (NOMBRE: any, LINK: any) => {
    if (NOMBRE && LINK) {
      //activar navegacion 
      if (findArrayRouterByLink(LINK)) {
        navigate(`/${LINK}`)
      }
    }

  }

  const findArrayRouterByLink = (namelink: any) => {
    console.log("++++++++++++++ ",namelink)
  //  console.log("prueba datos ", routersArrayExistentes)
    const routersArray= [...routersArrayExistentes]

    console.log(" rutas... " , routersArray.length)
    var bandera=false
    for (let i = 0; i < routersArray.length; i++) {
      //console.log("jsons ", routersArray[i].name)
      if (namelink == routersArray[i].name) {
        bandera=true
        return bandera;
      } 
    }
    return bandera
  }


  function SidebarItem(elemento: any) {
    var { item, controlIndex } = elemento;
    const [collapsed, setCollapsed] = React.useState(true);
    const { title, NOMBRE, items, SUBNIVEL, LINK } = item;

    function toggleCollapse() {
      setCollapsed(prevValue => !prevValue);
    }

    function onClick() {

      console.log("items ", NOMBRE, LINK, controlIndex)
      controlRoutersNavigation(NOMBRE, LINK)

      if (Array.isArray(SUBNIVEL)) {
        toggleCollapse();
      }
    }

    controlIndex = controlIndex + 1;

    let expandIcon;
    if (Array.isArray(SUBNIVEL) && SUBNIVEL.length) {
      expandIcon = !collapsed ? <ExpandLess /> : <ExpandMore />;
    }


    //estoy en el subnivel 3  , se control el nivel con controlIndex 1,2,3, .....  

    if (controlIndex == 3) {
      return (
        <>
          <List component="div" disablePadding >
            <ListItemButton sx={{
              pl: 3, color: 'white',
              backgroundColor: 'cray'
            }} onClick={onClick} >
              <ListItemIcon sx={{
                margin: '0px', padding: '0px'
              }} >
                {controlGeneretionsIcons(controlIndex)}
                {/*<HomeIcon sx={{ color: 'white' }} />*/}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <ListItemText sx={{ color: 'white' }} primary={NOMBRE} primaryTypographyProps={{ fontSize: '11px' }} />
              </ListItemIcon>

              {expandIcon}
            </ListItemButton>
          </List>
          <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            {Array.isArray(SUBNIVEL) ? (
              <List disablePadding dense>
                {SUBNIVEL.map((subItem, index) => (
                  <SidebarItem key={`${subItem.id}${index}`} item={subItem} controlIndex={controlIndex} />
                ))}
              </List>
            ) : null}
          </Collapse>
        </>
      )
    }
    return (
      <>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3, color: 'white' }} onClick={onClick} >

            {controlGeneretionsIcons(controlIndex)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ListItemText sx={{ color: 'white' }} primary={NOMBRE} primaryTypographyProps={{ fontSize: '11px' }} />
            {expandIcon}
          </ListItemButton>
        </List>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(SUBNIVEL) ? (
            <List disablePadding dense>
              {SUBNIVEL.map((subItem, index) => (
                <SidebarItem key={`${subItem.id}${index}`} item={subItem} controlIndex={controlIndex} />
              ))}
            </List>
          ) : null}
        </Collapse>
      </>
    );
  }

  /*
  function Sidebar({ items ,SUBNIVEL  }: any) {
    console.log("items ...  ",items )
    console.log("items ...  ",SUBNIVEL )
    return (
      <>
        <List disablePadding dense>
          {items.map((sidebarItem: any, index: any) => (
            <SidebarItem
              key={`${sidebarItem.title}${index}`}
              item={sidebarItem}

            />
          ))}
        </List>
      </>
    );
  }
  */

  function Sidebar({ items, SUBNIVEL }: any) {
    // console.log("datos ...  ", datos)
    // console.log("niveles ...  ",SUBNIVEL )
    var controlIndex = 0;


    return (
      <>
        <List disablePadding dense>
          {SUBNIVEL?.map((sidebarItem: any, index: any) => (
            <SidebarItem
              key={`${sidebarItem.title}${index}`}
              item={sidebarItem}
              controlIndex={controlIndex}
            />
          ))}
        </List>
      </>
    );
  }

  return (

     <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GLOBAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ height: '100vh' }}>
        <DrawerHeader sx={{ backgroundColor: '#383737' }}>
          <div style={{ width: '60%', margin: 'auto', marginTop: '20px', marginBottom: '8px' }}>
            <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: 'white' }} /> : <ChevronLeftIcon sx={{ color: 'red' }} />}
          </IconButton>
        </DrawerHeader>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#383737' }}>
          <AccountCircleRoundedIcon />
          <h1 style={{ fontSize: '13px', margin: '0px', padding: '0px', color: 'white' }}>ADOLFO MONDOCORRE</h1>
        </div>
        {/*<Divider />*/}
        <List sx={{ backgroundColor: '#383737', height: '100vh' }}>

          <Sidebar SUBNIVEL={SUBNIVEL} />
        </List>

        <Divider />



      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />
        {/*windowStatus.solicitudesStatus ?
          <><Solicitudes/></> : <>
            <InventarioCierre />
          </>
        */}
        {children}
      </Box>
    </Box>

  );
}
//<Solicitudes/>
//<RevisionPedido/