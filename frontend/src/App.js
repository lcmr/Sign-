import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './views/layout/public/Layout';
import {Layout as PrivateLayout} from './views/layout/private/Layout';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import SingUp from './views/SingUp';
import AuthProvider from './auth/AuthProvider';
import { createContext, useContext } from 'react';
import RequireAuth from './auth/RequireAuth';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});


const AuthContextType = {
  user: null,
  signin: (user, callback) => {},
  signout: (callback) => {},
}
let AuthContext = createContext(AuthContextType);
const useAuth = () =>{
  return useContext(AuthContext);
}
function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider AuthContext={AuthContext}>
        <Routes>
            <Route path="/" element={<Layout useAuth={useAuth} />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login useAuth={useAuth} />}/>
              <Route path="singup" element={<SingUp />}/>
          </Route>
          <Route 
            path="/private" 
            element={
                <RequireAuth useAuth={useAuth}>
                  <PrivateLayout useAuth={useAuth}>
                      <Route index element={<Home />} />
                  </PrivateLayout>
                </RequireAuth>
            } 
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
