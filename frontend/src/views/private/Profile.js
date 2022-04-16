import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux'
import { userActions } from '../../actions';
import UserForm from "../../components/UserForm";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('Requerido'),
  last_name: Yup.string()
    .required('Requerido'),
  email: Yup.string().lowercase('Debe ser en minusculas').email('Correo Invalido').required('Requerido'),
  password: Yup.string(),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no son iguales')
});

const Profile = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })
    useEffect(
        ()=>{
            let token = JSON.parse(localStorage.getItem('user'));
            var decoded = jwt_decode(token.token);
            setUser({
                ...user,
                id: decoded.id,
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
            })
        },
    [])
    const handleSubmit = (values) => {
      const submitData = { id: user._id, ...values}
      dispatch(userActions.updateProfile(submitData, () => navigate('/private/profile', { replace: true })))
    }
    return(
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingX: '50px'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Perfil
        </Typography>
        <Box sx={{ mt: 3 }}>
            {user.email !== '' && <UserForm handleSubmit={handleSubmit} initialValues={user} submitLabel='Actualizar' validationSchema={SignupSchema}/>}
            
        </Box>
    </Box>
    )
}

export default Profile