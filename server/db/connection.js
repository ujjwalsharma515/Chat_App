const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chatapp_admin:chatapp_admin@cluster0.1jhklwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

).then(()=>{
    console.log("connection successful");
}).catch((err)=>
{
    console.log("not successfull");
})