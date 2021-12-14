//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//create the schema
const serviceSchema = mongoose.Schema({
    
    //required properties
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true

    },
    imgurl:{
        type:String,
    } 
})

const serviceModel = mongoose.model('services', serviceSchema)

module.exports = serviceModel