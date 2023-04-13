const userSchema = require('../models/userSchema');


exports.addUser = async (req,res)=>{

    try {
     

        let {name} = req.body;
        console.log(name);

        imagePath = "http://localhost:3000/" + req.file.path.replace(/\\/g, "/")

        const newUser = await new userSchema({name,imagePath});
        newUser.save();
        res.status(200).send(" user added Successfully");
      } catch (err) {
        console.log(err);
        res.status(500).send("something went Wrong ⛔");
      }
} 

exports.getUsers = async(req,res)=>{
    try {
        const users = await userSchema.find();
        console.log("liste of users",users);

        res.status(200).send(users);
      } catch (error) {
        console.log(error);
        res.status(500).send("Somethig went wrong ⛔");
      }
}