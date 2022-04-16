import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import Sidebar from './Sidebar';
import AlertMessage from '../../../components/Alert';


const Layout = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar onClick={toggleDrawer} open={open}/>
            <Sidebar onClick={toggleDrawer} open={open}/>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >   
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <AlertMessage/>
                <Outlet />
            </Container>
        </Box>
      </Box>
    )
}

export {Layout}