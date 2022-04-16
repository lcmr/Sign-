import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import * as Yup from 'yup';
import AlertMessage from "./Alert";

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
      .required('Requerido'),
    last_name: Yup.string()
      .required('Requerido'),
    email: Yup.string().lowercase('Debe ser en minusculas').email('Correo Invalido').required('Requerido'),
    password: Yup.string().required('Requerido'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no son iguales').required('Requerido')
});

const UserForm =  ({handleSubmit, submitLabel='Registrarse', initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}, validationSchema = SignupSchema}) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        enableReinitialize: true,
    });
    return(
    <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="first_name"
              name="first_name"
              label="Nombre"
              autoComplete="given-name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="last_name"
              name="last_name"
              label="Apellidos"
              autoComplete="family-name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Correo Electrónico"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Confirmar Contraseña"
              type="password"
              autoComplete="new-password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />
          </Grid>
        </Grid>
        
        <AlertMessage/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {submitLabel}
        </Button>
    </form>
    )
}

export default UserForm