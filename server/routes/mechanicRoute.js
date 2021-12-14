//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
const Service = require("../models/service");
const Vehicle = require("../models/vehicle");
const User = require("../models/user");
const Mechanic = require("../models/mechanics");
const Mechanicwork = require("../models/mechanicavailability")
router.get('/get', async (req, res) => {
   const machaniceList=await Mechanic.find();
   res.send(machaniceList);
});

//Post request to get work for the mechanic
router.post('/get-work', async (req, res) => {
    const  {id,date}=req.body;
    console.log(id,date);
    const work=await Mechanicwork.findOne({mechanic:id,date:date});
    console.log(work);
    if(work===null || work.work<4){
        const book=await Booking.find({date:date,status:'Booked'});
        if(work==null){
            return res.send({work:0,booking:book});
        }
       
        return res.send({work:work.work,booking:book})
    }
    else{
        return res.send({work:work.work,booking:null})
    }
 });

// post request to assign a mechanic to a booking
 router.post('/assign/mechanic', async (req, res) => {
    //get the data
    const  {mechanic_id,booking_id,date}=req.body;
    console.log(mechanic_id,date)
     //Find the mechanic id, date and booking id 
    var work=await Mechanicwork.findOne({mechanic:mechanic_id,date:date});
    const book=await Booking.findOne({_id:booking_id});
     
    console.log('work',work)

      //check if the work is equal to null and assign 0 work
    if(work==null){
        work=new Mechanicwork({mechanic:mechanic_id,date:date,work:0});
        work.work=0;
    }
        
    if(work.work<4){ //check if mechanic is available (has less then 4 work)
        if(book.service=='Major Repair'){ // check if the Service is Major Repair
            if(work.work<3){ // if the machanic has less the 3 works he is available to Major Repair
                console.log(work.work)
               work.work=work.work+2; //then increase the work
               book.mechanic=mechanic_id; //assign booking to a mechanic
               book.status='In Service'; //change the booking status and save
               work.save(); 
               book.save()

                console.log('major after',work.work)

               return res.send("Mechanic assigned successfully")
            }
            else{
                return res.send("Mechanic is occupied");
            }
        }
        else{ // if other services increase 1 work 
            console.log('other before',work.work);
            work.work=work.work+1
            book.mechanic=mechanic_id;
            book.status='In Service';
            work.save();
            book.save()
            console.log('other after',work.work)
            return res.send('Mechanic assigned successfully');

        }

    }
    else{
        return res.send("Mechanic is occupied");
    }
    
    
 });



module.exports = router;