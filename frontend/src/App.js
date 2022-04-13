// import 'dotenv/config'
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './views/layout/public/Layout';
import { Layout as PrivateLayout} from './views/layout/private/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import SingUp from './views/SingUp';
import RequireAuth from './auth/RequireAuth';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />}/>
            <Route path="singup" element={<SingUp />}/>
        </Route>
        <Route 
          path="/private" 
          element={
              <RequireAuth>
                <PrivateLayout>
                    <Route index element={<Home />} />
                </PrivateLayout>
              </RequireAuth>
          } 
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
