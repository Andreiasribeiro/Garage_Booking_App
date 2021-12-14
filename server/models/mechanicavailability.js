//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//create the schema
const availabilitySchema = mongoose.Schema({
    mechanic: {
        type: String,
        required:true

    },
    date: {
        type: String,
        required: true
    },
    work:{
        type: Number,
        required: false
    }
})
const availabilitymodel=mongoose.model('availability', availabilitySchema);

module.exports = availabilitymodel