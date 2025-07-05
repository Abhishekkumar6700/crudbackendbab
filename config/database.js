const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser:true,
        useunifiedTopology:true
    })
    .then( () => console.log("db connection is successful"))
    .catch( (error) => {
        console.log("error occur in db connection");
        console.log(error.message);
        process.exit(1);
    });
}


module.exports = dbConnect;