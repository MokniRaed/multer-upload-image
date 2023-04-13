const exprees = require("express");
const { addUser, getUsers } = require("../controllers/userControllers");
const path = require('path');


const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/')
  },
  filename: function (req, file, cb) {
    const newFileName = Date.now() + '-' + file.originalname
    cb(null, newFileName)
  }
})



const upload = multer({ storage: storage })


const appRouter = exprees.Router();
// Add User object to the database
appRouter.post("/addUser",upload.single("image") ,addUser);
// Get Array of Users objects from the database
appRouter.get("/getusers", getUsers);
// Get  Users object by ID from the database
appRouter.get('/assets/:filename',(req,res)=>{
    const {filename} = req.params
    const filePath = path.join(__dirname, '..', 'assets', filename);

    res.sendFile(filePath)
})

module.exports = appRouter;
