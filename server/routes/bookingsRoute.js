//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
const Service = require("../models/service");
const Vehicle = require("../models/vehicle");
const User = require("../models/user");



router.post('/status/update', async (req, res) => {
    const {id,status}=req.body;
    var bookingdata=await Booking.findOne({_id:id});
    bookingdata.status=status;
    bookingdata.save()
    res.send('Ok');
})



router.post('/admin/getbooking/detail', async (req, res) => {
    const {
        bookingid,
        userid
    } = req.body


    const user=await User.findOne({_id:userid})
   
    if(!user.isAdmin){
        res.send('you are not admin');
        return;
    } 
    var bookingdata=await Booking.findOne({_id:bookingid});
    res.send(bookingdata);
})

router.post('/admin/getbooking', async (req, res) => {
    const {
        userid,
    } = req.body

    
    const user=await User.findOne({_id:userid});
    console.log(user);
    if(!user.isAdmin){
        res.send('you are not admin');
    }

    Booking.find({ }, async function (err, data) {
      res.send(data);
    });


})


router.post('/check/avail', async (req, res) => {
    const {
        service,
        userid,
        date,

    } = req.body
    Booking.find({ date: date }, async function (err, data) {
    
        if (data.length <= 4) {
        
            const vehicledata = await Vehicle.findOne({ user: userid });
    
            res.send(vehicledata);
        }
        else {
            res.send('SNA')
        }

    });


})


router.post("/bookservice", async (req, res) => {

    const {
        service,
        userid,
        date,
        vehicle_type,
        vehicle_license,
        vehicle_engine_type,
        comment

    } = req.body

    console.log(service, userid, date,);
    Booking.find({ date: date }, async function (err, data) {
        if (data.length <= 4) {
            const servicetemp = await Service.findOne({ name: service });
            const user=await User.findOne({_id:userid});
            const newbooking = new Booking({
                service: servicetemp.name,
                serviceid: servicetemp._id,
                userid: userid,
                useremail:user.email,
                username:user.name,
                userno:user.phone,
                date: date,
                transactionid: Math.random() * 100000000,
                totalamount: servicetemp.cost,
                vehicle_type,
                vehicle_engine_type,
                vehicle_license,
                comment
            });
            newbooking.save()
            res.send('Success')
        }
        else {
            res.send('SNA')
        }
    });

   

});
router.post("/get-booking", async (req, res) =>{
    const {user}=req.body;
    const bookingdata = await Booking.find({ userid: user })
    res.send(bookingdata);
    
});



router.post("/get-booking-by-id", async (req, res) =>{
    const {id}=req.body;
    const bookingdata = await Booking.findOne({_id: id })
    res.send(bookingdata);
    
});

module.exports = router;