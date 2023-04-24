import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import CrearRecetaPage from '../pages/crearreceta/CrearRecetaPage';
import EntregasPage from '../pages/entregas/EntregasPage';
import InventarioCierrePage from '../pages/invetario-cierrre/InventarioCierrePage';
import Login from '../pages/Login/Login';
import PedidosConsolidadosPage from '../pages/pedidos-consolidados/PedidosConsolidadosPage';
import PerfilPedidoPage from '../pages/perfil-pedido/PerfilPedidoPage';
import RecepcionPage from '../pages/recepcion/RecepcionPage';
import RecetaComboPage from '../pages/receta-combo/RecetaComboPage';
import RevsionPedidioPage from '../pages/revision-pedido/RevsionPedidioPage';
import SolicitudesPage from '../pages/solicitudes/SolicitudesPage';
import VentaPage from '../pages/venta/VentaPage';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';

import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import CrearCliente from './modules/clientes/crear-cliente/CrearCliente';
import CrearRecetas from './modules/crear-recetas/CrearRecetas';
import InventarioCierre from './modules/inventario-cierre/InventarioCierre';
import RecetaCombo from './modules/receta/RecetaCombo';
import RevisionPedido from './modules/revision-pedido/RevisionPedido';
import Solicitudes from './modules/solicitudes/Solicitudes';

import materialRoutes from './views/material-kit/MaterialRoutes';
import UpdateCliente from './modules/clientes/update-cliente/UpdateCliente';
import AccesoBotonPage from '../pages/seguridad/accesoboton/AccesoBotonPage';
import AccesoBotonSucursalPage from '../pages/seguridad/accesobotonSucursal/AccesoBotonSucursalPage';
import CambiarPasswordPage from '../pages/seguridad/cambiar-password/CambiarPasswordPage';
import ResetPasswordPage from '../pages/seguridad/reset-password/ResetPasswordPage';
import AccesoFormasPagoPage from '../pages/configuraciones/acceso-formas-pago/AccesoFormasPagoPage';
import SucursalesConfigPage from '../pages/configuraciones/sucursales-config/SucursalesConfigPage';
import BorrarUsuario from './modules/usuarios/borrar-usuario/BorrarUsuario';
import BorrarUsuarioPage from '../pages/usuarios/BorrarUsuarioPage';
import AccessibilidadPage from '../pages/usuarios/AccessibilidadPage';
import ReporteCierreTurnoPage from '../pages/reporte-cierre-turno/ReporteCierreTurnoPage';
import RepMovCajaPage from '../pages/rep-movimiento-caja/RepMovCajaPage';
import PerfilPage from '../pages/perfiles/perfil/PerfilPage';
import EventoSignificativoPage from '../pages/facturacion/evento-significativo/EventoSignificativoPage';
import CuisPage from '../pages/facturacion/cuis/CuisPage';
import LlavePage from '../pages/facturacion/llave/LlavePage';
import ProductoPage from '../pages/configuraciones/productos/ProductosPage';
import AccesoUsuarioGeneralPage from '../pages/seguridad/acceso-usuario-general/AccesoUsuarioGeneralPage';
import AccesoUsuarioVentaPage from '../pages/seguridad/acceso-usuario-venta/AccesoUsuarioVentaPage';
//import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound = Loadable(lazy(() => import('./views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('./views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('./views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('./views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('./views/dashboard/Analytics')));

//facturacion
const facturacionRoutes = [

  { path: '/facturacion/llave', element: < LlavePage/> },
  { path: '/facturacion/cuis', element: <CuisPage/>},
  { path: '/facturacion/evento-significativo', element: < EventoSignificativoPage/> },


];

//perfiles
const perfilesRoutes = [

  { path: '/perfiles/perfil', element: <PerfilPage /> },


];


const reportesRoutes = [

  { path: '/reportes/reporte-cierre-turno', element: <ReporteCierreTurnoPage /> },
  { path: '/reportes/rep-movimiento-caja', element: <RepMovCajaPage /> },


];
//usuarios

const usuariosRoutes = [
  { path: '/usuarios/borrar-usuario', element: <BorrarUsuarioPage /> },
  { path: '/usuarios/accesibilidad', element: <AccessibilidadPage /> },

];

//configuraciones

const configuracionesRoutes = [
  { path: '/config/acceso-formas-pago', element: <AccesoFormasPagoPage /> },
  { path: '/config/sucursales-config', element: <SucursalesConfigPage /> },
  { path: '/config/productos', element: <ProductoPage/>}
  //{ path: '/config/cambiar-password', element: <CambiarPasswordPage /> },
  //{ path: '/config/reset-password', element: <ResetPasswordPage /> },

];

//seguridad

const seguridadRoutes = [
  { path: '/seguridad/acceso-boton', element: <AccesoBotonPage /> },
  { path: '/seguridad/acceso-boton-sucursal', element: <AccesoBotonSucursalPage /> },
  { path: '/seguridad/cambiar-password', element: <CambiarPasswordPage /> },
  { path: '/seguridad/reset-password', element: <ResetPasswordPage /> },
  { path: '/seguridad/acceso-usuarios-general', element: <AccesoUsuarioGeneralPage /> },
  { path: '/seguridad/acceso-usuarios-venta', element: <AccesoUsuarioVentaPage /> },

];

const ventasRoutes = [
  { path: '/venta/ventas', element: <VentaPage /> },


];
//rutas demo 
const pedidosRoutes = [
  { path: '/pedido/existencia-prueba', element: <InventarioCierrePage /> },
  { path: '/pedido/solicitud-prueba', element: <SolicitudesPage /> },
  { path: '/pedido/apv-prueba', element: <RevsionPedidioPage /> },
  { path: '/pedido/recepcion', element: <RecepcionPage /> },
  { path: '/pedido/perfil-pedido', element: <PerfilPedidoPage /> },
  { path: '/pedido/pedidos-consolidados', element: <PedidosConsolidadosPage /> },
  { path: '/pedido/entregas', element: <EntregasPage /> },

];

// rutas recetas
const recetasRoutes = [

  { path: '/receta/receta-combo', element: <RecetaComboPage /> },
  { path: '/receta/receta', element: <CrearRecetaPage /> }
];







const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      //reportes
      ...facturacionRoutes,
      //reportes
      ...perfilesRoutes,
      //reportes
      ...reportesRoutes,
      //usuarios
      ...usuariosRoutes,
      //configuraciones
      ...configuracionesRoutes,
      //seguridad
      ...seguridadRoutes,
      //ventas
      ...ventasRoutes,
      //pedidos
      ...pedidosRoutes,
      //recetas
      ...recetasRoutes,
      //materialRoutes
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <Login /> },
  //{ path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/crear-cliente', element: <CrearCliente /> },
  { path: '/session/update-cliente', element: <UpdateCliente /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
