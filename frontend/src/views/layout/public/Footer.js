import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = ({props}) => {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/lcmr">
            Luis Méndez  
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
    
}

export default Footer