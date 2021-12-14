//====== Garage_Booking_App - Andréia Sales Ribeiro ========
// Learning source to build this application were found on 
//https://www.udemy.com/course/mern-stack-hotel-booking-app-with-react-node-mongo-2021/learn/lecture/27149522#overview
//https://www.youtube.com/watch?v=0o_JVcSKxRA
//https://www.youtube.com/watch?v=497riGWbhsQ&t=354s
//https://www.youtube.com/watch?v=eZJOSK4gXl4
const bodyParser = require('body-parser');
const express = require('express');
const app =  express();
const dbConfig = require('./db');
const servicesRoute = require('./routes/servicesRoute');
const usersRoute = require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
const partRoute = require('./routes/partRoute');
const mechanicRoute= require('./routes/mechanicRoute');
const niceInvoice = require('nice-invoice');
var easyinvoice = require('easyinvoice');
const fs = require('fs');



app.use(express.json());//to receive the parameters


//access for the routers files and handle endpoints
app.use('/api/services', servicesRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)
app.use('/api/parts', partRoute)
app.use('/api/mechanic', mechanicRoute)

const port = process.env.PORT || 5000;



app.listen(port,()=> console.log(`Server running on port ${port} `));








