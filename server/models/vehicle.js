//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//create the schema
const vehicleSchema = mongoose.Schema({
    user:{
        type: String, //to store the user id
        required:true
    },
    vehicle_type:{
        type: String,
        required:true
    },
    vehicle_license:{
        type: String,
        required:true
    },
    vehicle_engine_type:{
        type: String,
        required:true
    },
   

}, {
    timestamps: true,
})

const vehiclemodel=mongoose.model('vehicle', vehicleSchema);

module.exports = vehiclemodel