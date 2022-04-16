// import 'dotenv/config'
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './views/layout/public/Layout';
import { Layout as PrivateLayout} from './views/layout/private/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import RequireAuth from './auth/RequireAuth';
import Dashboard from './views/private/Dashboard';
import Profile from './views/private/Profile';
import Progress from './views/private/Progress';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { alertActions } from './actions';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function App() {
  let dispatch = useDispatch()
  let location = useLocation()
  useEffect(() => {
    dispatch(alertActions.clear())
  },[location])
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="singup" element={<SignUp />}/>
        </Route>
        <Route path="/private" element={<PrivateLayout/>}>
          <Route 
            index
            element={
              <RequireAuth>
                  <Dashboard />
              </RequireAuth>
            } 
          />
          <Route 
            path="profile" 
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            } 
          />
          <Route 
            path="progress" 
            element={
              <RequireAuth>
                <Progress />
              </RequireAuth>
            } 
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
