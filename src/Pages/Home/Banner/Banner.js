import React from 'react';
import Grid from '@mui/material/Grid';
//img 
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="p" style={{ my: 3, color: 'gray', fontSize: 13 }}>
                            You must always brush your teeth! As Miguel de Cervantes said, “Every tooth in a mans head is more valuable than a diamond.” So remember to brush your teeth, and look after them as well as you would look after a diamond.',
                        </Typography>
                        <br />
                        <Button variant="contained" sx={{ mt: 5 }} style={{ backgroundColor: '#5CE7ED', fontWeight: 'bold' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;