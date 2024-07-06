const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const freelancer = require("./models/freelancer"); 

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(8080,()=>{
    console.log("Server is listeing on port 8080");
});


app.post("/signup",async (req,res)=>{
    try{
        let {UserName,Email,Password} = req.body.freelancer;
        let check = await freelancer.findOne({email: Email});
        if(check){
            console.log("Email already use");
            res.json("Email already in use");
        } 
        else{
            let demoUser = new freelancer({
                username: UserName,
                email: Email,
                password: Password
            });
            demoUser.save().then((req,res)=>{
                console.log("User added successfuly");   
             }).catch((err)=>{
                console.log("Username already exist");
                res.json("Username already exist");
           });
        } 
    }catch{
        console.log("some error has occured");
    }
});




// app.post("/login", async (req,res)=>{
//     let {UserName} = req.body.freelancer;
//     let {Email,Password} = req.body.freelancer;
//     const check = await freelancer.findOne({email: Email})
//         console.log(check);
//         console.log(check.username);
    
//         if(check.username === UserName){
//             res.send("Username already exist,try with another username");
//              console.log("Username already exist, try with another username");
//         }else if(check.email === Email){
//             res.json("Email already exist, try with another email");
//             console.log("Email already exist, try with another email");
//         }else if(check.password === Password){
//             res.json('Wrong Password enterred');
//             console.log("Wrong Password entered");
//         }else if(username === UserName && email === Email && password === Password){
//            let demoUser = new freelancer({
//                  username: UserName,
//                  email: Email,
//                  password: Password
//              });
//             console.log(demoUser);
//             demoUser.save().then((res)=>{
//                console.group(res);
//             }).catch((err)=>{
//                 console.log(err);
//             });
//          }
//         // freelancer.find().then((res)=>{
//         //     console.log(res);
//         // })
//     });
