const express = require("express"); //server instanciate ho gya
const app = express();  // uska name app rakh diya

//load config from env file

require("dotenv").config(); // jo v config .env file me rkhi hai wo sara .env file load ho jaigi

const PORT = process.env.PORT || 4000; //process object se port number niaklega agar mil gya to thik nhi to 4000 port par host ho jaiga

//middleware to parse json request body

app.use(express.json());  //

//import routes for TODO API routes

const todoRoutes = require ("./routes/todos");

//mount/add the todo Api routes

app.use("/api/v1",todoRoutes);


//start server

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

//connect to the db

const dbConnect = require ("./config/database");
dbConnect();  // db ko connect kar diya application k sath


//default route

app.get("/",(req,res) =>{
    res.send(`<h1> This is homepages </h1>`);
})