import { Avatar, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };
const Progress = () => {
  const navigate = useNavigate()
  const location = useLocation()
    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    justifyContent: "center",
                  }}
                >
                  <Box
                      sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                      }}
                  >
                    <Button
                      onClick={() => navigate('/private/progress/letters-list')}
                      selected={location.pathname==='/private/progress/letters-list'}

                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                      <Avatar alt='Letras' sx={{width: 75, height: 75}} >L</Avatar>
                      Letras
                    </Button>
                  </Box>
                  <LinearProgressWithLabel value={80} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,    
                    justifyContent: "center"
                  }}
                >
                  <Box
                      sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                      }}
                  >
                    <Button
                      onClick={() => navigate('/private/progress/numbers-list')}
                      selected={location.pathname==='/private/progress/numbers-list'}

                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                      <Avatar alt='Numeros' sx={{width: 75, height: 75}} >N</Avatar>
                      Numeros
                    </Button>
                  </Box>
                  <LinearProgressWithLabel value={50} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    justifyContent: "center"
                  }}
                >
                  <Box
                      sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                      }}
                  >
                    <Button
                      onClick={() => navigate('/private/progress/others-list')}
                      selected={location.pathname==='/private/progress/others-list'}

                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                      <Avatar alt='Otros' sx={{width: 75, height: 75,}} >O</Avatar>
                      Otros
                    </Button>
                  </Box>
                  <LinearProgressWithLabel value={5} />
                </Paper>
              </Grid>
            </Grid>
        </Container>
    )
}

export default Progress