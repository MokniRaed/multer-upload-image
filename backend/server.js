const exprees = require("express");
const cors = require('cors');
const appRouter = require("./Router/appRouter");
const connect = require("./config/conn");

const app = exprees();
const port = 3000;
app.use(cors({
  origin: '*'
}));


app.use(exprees.json());
//Call the connect funtion to db
connect();
//definition of the routes of the project
app.use("/",appRouter)


//Running server
app.listen(port, (err) => {
  err
    ? console.log("something went wrong with the server")
    : console.log(`we are running on .. http://localhost:${port}`);
});
