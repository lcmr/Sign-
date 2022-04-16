import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import UserForm from '../components/UserForm';
import { useDispatch } from 'react-redux'
import { authActions } from '../actions';
 
const SignUp = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let location = useLocation();

  let from = location.state?.from?.pathname || "/private";

  const handleSubmit = (values) => {
    dispatch(authActions.singup(values, () => navigate(from, { replace: true })))
  }

  return(
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
          Registrarse
        </Typography>
        <Box sx={{ mt: 3 }}>
          <UserForm handleSubmit={handleSubmit}/>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Ya tienes cuenta? Inicia Sesion
              </Link>
            </Grid>
          </Grid>
        </Box>
    </Box>
  )
}

export default SignUp