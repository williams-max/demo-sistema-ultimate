import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css';


//import { BrowserRouter } from 'react-router-dom';
//import { StyledEngineProvider } from '@mui/material';

import App from './App';
//import App from './app/App';
//import * as serviceWorker from './serviceWorker';
// third party style


//import 'perfect-scrollbar/css/perfect-scrollbar.css';

/**
 
 */


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



/*

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


*/

/*

  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>
*/