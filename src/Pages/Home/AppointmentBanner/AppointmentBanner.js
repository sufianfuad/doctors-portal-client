import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
//img
import doctor from '../../../images/doctor.png';
import bgDoctor from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bgDoctor})`,
    backgroundColor: 'rgba(54, 48, 95,.6)',
    backgroundBlendMode: ' darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 400, marginTop: '-120px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ mb: 3 }} style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="p" style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.
                            </Typography>
                            <br />
                            <Button variant="contained" sx={{ mt: 5 }} style={{ backgroundColor: '#5CE7ED', fontWeight: 'bold' }}>Learn more</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default AppointmentBanner;