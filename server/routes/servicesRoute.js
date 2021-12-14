//====== Garage_Booking_App - Andréia Sales Ribeiro ========
const express = require("express");
const router = express.Router();

const Service = require('../models/service');
const User = require('../models/user');


router.post("/service/save", async (req, res) => {
    const {userid,name,description,cost,imgurl}=req.body;


    const service=new Service({name:name,description: description, cost: cost, imgurl: imgurl})
    service.save()
    res.send('saved to db')
    

});


router.get("/getallservices", async (req, res) => {

    try {

        const services = await Service.find({})

        res.send(services)

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });


    }

});

//======================POST API Request============================
//To get the service by id
router.post("/service/update", async (req, res) => {
    const {userid,name,description,cost,imgurl,serviceid}=req.body;
    console.log(req.body);
    const user=User.findOne({_id:userid});
   

    const service=await Service.findOne({_id:serviceid});
    service.name=name;
    service.description=description;
    service.cost=cost;
    service.imgurl=imgurl;
    console.log(service.cost);
    service.save()
    res.send('ok');
   
});

router.post("/getservicebyid", async (req, res) => {
    
    //trim() removes the spaces and returns the omitted string.
    if(!req.body.serviceid){
      res.send('SWW');
    }
    const serviceid = req.body.serviceid.trim();

    try {
 
        const service = await Service.findById(serviceid)

        res.send(service)

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });

    }

});


router.post("/service/delete", async (req, res) => {
    
    
    const {userid,serviceid}=req.body;

    const user=User.findOne({_id:userid});

    if(!user.isAdmin){
        res.send('You are not admin');
    }

    try {
        const service = await Service.findById(serviceid);
        service.deleteOne();
        return res.status(400).json({ message: error });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });

    }

});



module.exports = router;