//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//create the schema
const mechanicSchema = mongoose.Schema({
    name: {
        type: String,
        required:true

    }
})
const mechanicmodel=mongoose.model('mechanics', mechanicSchema);

module.exports = mechanicmodel
   