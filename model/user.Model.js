   


     const mongoose = require("mongoose")

     const userSchema = mongoose.Schema({
          email : String,
          password : String,
     },{
        versionKey : false
     })

     const UserModel = mongoose.model("docuser", userSchema)

     module.exports = {UserModel}