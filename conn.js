const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/studentapi")    //creating a database hello
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err))
