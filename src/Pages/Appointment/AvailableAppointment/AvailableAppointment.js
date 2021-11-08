import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '7:00 PM - 9.00 AM',
        space: 12
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '9:00 AM - 11.00 AM',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '5:00 PM - 9.00 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '4:00 AM - 7.00 AM',
        space: 8
    },
    {
        id: 6,
        name: 'Teeth Cleaning',
        time: '8:00 AM - 9.00 AM',
        space: 10
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 2 }}>Available Appointment {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Your Appointment Booked Successfully!</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;