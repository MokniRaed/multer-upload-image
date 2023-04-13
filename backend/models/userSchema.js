const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
 
    name:String,
      
    imagePath:String
})

module.exports = mongoose.model("user",userSchema)