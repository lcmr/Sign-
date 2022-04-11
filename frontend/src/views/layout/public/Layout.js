import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from './Footer';
import Header from './Header';
const Layout = ({useAuth}) => {
    return(

    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
        <Header useAuth={useAuth}/>
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Outlet />
        </Container>
        <Box
            component="footer"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Footer sx={{ mt: 8, mb: 4 }} />
            </Container>
        </Box>
    </Box>
    )
}

export default Layout