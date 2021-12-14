//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//create the schema
const bookingSchema = mongoose.Schema({
    service:{
        type: String,
        required:true
    },
    serviceid:{
        type: String,
        required:true
    },
    userid:{
        type: String,
        required:true
    },
    useremail:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    userno:{
        type:String,
        required:true,
    },
    date:{
        type: String,
        required:true
    },
    totalamount:{
        type: Number,
        required:true
    },

    transactionid:{
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true,
        default: 'Booked'
    },
    comment:{
        type: String,
        required:false
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
    mechanic:{
        type: String,
        required: false
    }

}, {
    timestamps: true,
})

const bookingmodel=mongoose.model('bookings', bookingSchema);

module.exports = bookingmodel