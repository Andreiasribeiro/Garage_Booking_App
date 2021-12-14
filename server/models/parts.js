//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

const partSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    cost: {
        type: String,
        required:true
    }
})

const partmodel=mongoose.model('parts', partSchema);

module.exports = partmodel