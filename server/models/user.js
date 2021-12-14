//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const mongoose = require("mongoose");//import mongodb

//user model for user and admin(check isAdmin properte )
const userSchema = mongoose.Schema({

name:{
    type: String,
    required: true
},
email: {
    type:String,
    required: true
}, 
phone:{
    type:Number,
    required:true,
},
password: {
    type:String,
    required: true
},
isAdmin: {
    type: Boolean,
    default: false//give the access from the database for any user
}

},{
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel