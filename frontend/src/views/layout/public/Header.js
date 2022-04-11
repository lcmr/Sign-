import { Link as RouterLink } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../../components/AppBar';
import Toolbar from '../../../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const Header = ({useAuth}) => {

  let auth = useAuth();
  return(
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            to="/"
            component={RouterLink}
            sx={{ fontSize: 24 }}
          >
            {'Lenguaje de Señas'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {
              !auth.user ?
            <>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="/login"
              component={RouterLink}
              sx={rightLink}
            >
              {'Iniciar Sesion'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              to="/singup/"
              component={RouterLink}
              sx={{ ...rightLink, color: 'error.main' }}
            >
              {'Registrarse'}
            </Link>
            </>
              :
              <Link
              variant="h6"
              underline="none"
              to="/private/"
              component={RouterLink}
              sx={rightLink}
            >
              {'Dashboard'}
            </Link>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header