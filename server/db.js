//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//to initialize mongoose


 var mongoURL ='mongodb+srv://andreia:garagebooking@cluster0.3ma9e.mongodb.net/bookingapp'

//connect the data base
//accept three parameters: URL and two safe parameters: useUnifiedTopology and useNewUrlParser
 mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true})

 var connection = mongoose.connection

//To verify if the connection is successful or not succefully or not
 connection.on('error', ()=>{
     console.log('Mongo DB connection failed')
 })

 connection.on('connected', ()=>{
     console.log('Mongo DB connection successful')
 })

 module.exports = mongoose