   



     const express = require("express");
const { DoctorModel } = require("../model/doctor.Model");


     
     const doctorRoute = express.Router();
     
     doctorRoute.get("/", async (req, res) => {
       try {
         const serach = req.query.search || "";
     
         const doctors = await DoctorModel.find({
          "name": { $regex: serach },
         });
     
         res.send(doctors);
       } catch (err) {
         console.log(err);
         res.send("error");
       }
     });
     
     
     doctorRoute.get("/all", async (req, res) => {
       try {
         const specializationOption = [];
       
         const intitial = await DoctorModel.find();
     
         intitial.map((document) => {
             specializationOption.push(document.specialization);
         });
     
         let specialization= req.query.specialization || "All";
     
        
         let sort = req.query.sort || "fee";
         let order = req.query.order;
         specialization === "All"
           ? (specialization= [...specializationOption])
           : (specialization = req.query.specialization.split(","));
     
         req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
     
         let sortBy = {};
     
         if (order) {
           sortBy[sort[0]] = order;
         } else {
           sortBy[sort[0]] = "asc";
         }
     
         const products = await DoctorModel
           .find({
             specialization:[...specialization],
           })
           .sort(sortBy);
     
         res.send(products);
       } catch (err) {
         console.log(err);
         res.send({ "error occurd": err });
       }
     });
     
     
     module.exports={
         doctorRoute 
     }