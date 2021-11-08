import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from '../SingleService/SingleService';
import Typography from '@mui/material/Typography';
//img
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride',
        description: 'A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.',
        image: fluoride
    },
    {
        name: 'Cavity',
        description: 'You must always brush your teeth! As Miguel de Cervantes said, “Every tooth in a mans head is more valuable than a diamond.” So remember to brush your teeth, and look after them as well as you would look after a diamond.',
        image: cavity
    },
    {
        name: 'Whitening',
        description: 'It is important to teach children about dentistry and the importance of looking after their teeth, and dentist quotes can be a great way to do this.So remember to brush your teeth, and look after them as well as you would look after a diamond',
        image: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'info.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <SingleService
                            key={service.name}
                            service={service}
                        ></SingleService>)
                    }

                </Grid>
            </Container>

        </Box>
    );
};

export default Services;