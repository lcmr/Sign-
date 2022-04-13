import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userActions } from '../actions';
import AlertMessage from '../components/Alert';


const Login = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let location = useLocation();
  // let auth = useAuth();

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  
  let from = location.state?.from?.pathname || "/private";
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(userActions.login(email, password, () => navigate(from, { replace: true })));
    // auth.signin(username, () => {
    //   // Send them back to the page they tried to visit when they were
    //   // redirected to the login page. Use { replace: true } so we don't create
    //   // another entry in the history stack for the login page.  This means that
    //   // when they get to the protected page and click the back button, they
    //   // won't end up back on the login page, which is also really nice for the
    //   // user experience.
    //   navigate(from, { replace: true });
    // });  
  }
  return(
      <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={val => setEmail(val.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={val => setPassword(val.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <AlertMessage/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="#" variant="body2">
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/singup" variant="body2">
                {"No tienes cuenta? Registrate Aquí"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </>
  )
}

export default Login