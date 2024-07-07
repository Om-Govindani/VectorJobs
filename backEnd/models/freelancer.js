const mongoose = require("mongoose");

async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/vectorJobs");
}
main().then(()=>{
    console.log("Freelancer Database Connection Successfull");
}).catch((err)=>{
    console.log(err);
});

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});


const freelancer = mongoose.model("Freelancer",userSchema);
module.exports = freelancer;