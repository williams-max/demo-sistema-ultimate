import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';

import './fake-db';

/*

  <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
        <CssBaseline />
        {content}
        </MatxTheme>

      </AuthProvider>
    </SettingsProvider>
*/
const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>

      </AuthProvider>
    </SettingsProvider>
  );
};
/*
<SettingsProvider>
<AuthProvider>
  <MatxTheme>
    <CssBaseline />
    {content}
  </MatxTheme>
</AuthProvider>
</SettingsProvider>
*/
export default App;
