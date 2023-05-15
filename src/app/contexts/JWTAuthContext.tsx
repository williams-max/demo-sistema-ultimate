import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import MatxLoading from './../components/MatxLoading'
//import { MatxLoading } from 'app/components';
import {
  getStorage,
  removeStorage,
  setStorage
} from '../../core/helpers/localStorageHelpers';
import AplicationConnect from '../../core/api/AplicationConnect';



const initialState = {
  user: null,
  isInitialised: false,
  isAuthenticated: false
};

const isValidToken = (accessToken: any) => {
  if (!accessToken) return false;

  //const decodedToken = jwtDecode(accessToken);
  //const currentTime = Date.now() / 1000;
  //return decodedToken.exp > currentTime;
};

const setSession = (accessToken: any) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INIT': {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, isInitialised: true, user };
    }

    case 'LOGIN': {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }

    case 'LOGOUT': {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { ...state, isAuthenticated: false, user: null };
    }

    case 'REGISTER': {
      const { user } = action.payload;

      return { ...state, isAuthenticated: true, user };
    }

    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: 'JWT',
  login: () => { },
  logout: () => { },
  register: () => { }
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: any, password: any) => {
    //const response = await axios.post('/api/auth/login', { email, password });
    //const { user } = response.data;
    try {
      /*const respuesta = await axios.post('http://192.168.0.8:8080/SistemaGeneralBLocal/login', {
        "usuario": email,
        "password": password

      })*/

      const respuesta = await AplicationConnect.post<any>('/login', {
        "usuario": email,
        "password": password
      })

      console.log("respuesta ", respuesta.data)
     if (respuesta.data) {
     // if (true) {
        const dataUser ={
          token:'token12345',
          usuario:'tonyMontana',
          
        }
        //const { token, usuario } = dataUser
         const { token, usuario } = respuesta.data
        const user = {
          id: 10,
          role: 'SA',
          name: email,
          username: email,
          //email:email,
          email: usuario.NOMBRE_COMPLETO,
          avatar: '/assets/images/face-7.jpg',
          age: 25
        }
        //const tokens = "tokens12345"
        setStorage('token', token, 7200)
        localStorage.setItem('user', JSON.stringify(usuario));
        dispatch({ type: 'LOGIN', payload: { user } });
        dispatch({ type: 'INIT', payload: { isAuthenticated: true, user: user } });
        // dispatch({ type: 'INIT', payload: { isAuthenticated: true, user: data.user } });
      }

    } catch (error) {
      console.log("error ", error)
    }

  };

  const register = async (email: any, username: any, password: any) => {
    const response = await axios.post('/api/auth/register', { email, username, password });
    const { user } = response.data;

    dispatch({ type: 'REGISTER', payload: { user } });

  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };


  /*NO LOGIN POR DEFAULT*/
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/api/auth/profile');
        dispatch({ type: 'INIT', payload: { isAuthenticated: true, user: data.user } });

      } catch (err) {
        console.error(err);
        dispatch({ type: 'INIT', payload: { isAuthenticated: false, user: null } });
      }
    })();
  }, [])

  // SHOW LOADER
  if (!state.isInitialised) return <MatxLoading />;

  return (
    <AuthContext.Provider value={{ ...state, method: 'JWT', login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
