//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const express = require("express");
const router = express.Router();

const User = require('../models/user');
const Vehicle = require('../models/vehicle');

//======================POST API Request============================
//To register an user and their vehicle

router.post("/register",async( req, res)=>{

    const newuser = new User({name : req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password})

    try {
        const user = await newuser.save()

        const newvehicle = new Vehicle({ user:user._id, vehicle_type: req.body.vehicle_type, vehicle_license: req.body.vehicle_license, vehicle_engine_type: req.body.vehicle_engine_type})
        newvehicle.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({error})
        
    }

});

//======================POST API Request============================
//To login a registered user checking the condition email and password

router.post("/login",async( req, res)=>{

const {email, password} = req.body

try {
    const user = await User.findOne({email: email, password: password})
    if (user) {

        const temp ={
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            _id: user._id,

        }
        res.send(temp)
    }else {
        return res.status(400).json({message:'Login failled'});
    }

} catch (error) {
  return res.status(400).json({error});
}
});

module.exports = router;

