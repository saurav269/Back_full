    

    const express = require("express");

    const { connection } = require("./config/db");
    const app = express();
    const cors = require("cors");
const { userRouter } = require("./route/User.route");
const { doctorRoute } = require("./route/doctorRoute");
const { adminRoutes } = require("./route/adminRouter");

    app.use(express.json());
    
    app.use(cors());
    
    app.get("/", (req, res) => {
      res.send("This API is for Masai Hospital*");
    });
    
    
    app.use("/user", userRouter);
    
    app.use("/doctors",doctorRoute)
    
    app.use("/appointments",adminRoutes)

    //   app.use(Authenticate)

     app.listen(7500, async() =>{

        try{   
            await connection
            console.log("Server is running on port 7500")
        }catch(err){
            console.log(err)
        }

     })
