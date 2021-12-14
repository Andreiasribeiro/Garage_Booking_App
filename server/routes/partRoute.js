//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
const Service = require("../models/service");
const Vehicle = require("../models/vehicle");
const User = require("../models/user");
const Part=require("../models/parts")

router.post('/add', async (req, res) => {
    const {name,cost}=req.body;
    const partObj=new Part({name:name,cost:cost})
    partObj.save();
    console.log('ãdd',partObj);
    res.send('ok');
});


router.post('/edit', async (req, res) => {
    const {name,cost,id}=req.body;
    const partObj=await Part.find({_id:id})
    partObj.name=name;
    partObj.cost=cost;
    partObj.save();
    res.send('ok');
});


router.post('/delete', async (req, res) => {
    const {id}=req.body;
    const partObj=await Part.findById(id);
    partObj.deleteOne();
    res.send('ok');
});



router.get('/get', async (req, res) => {
   
    const partsData=await Part.find();
    res.send(partsData);
})

module.exports = router;