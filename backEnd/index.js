const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const freelancer = require("./models/freelancer"); 
const client = require("./models/client");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(8080,()=>{
    console.log("Server is listeing on port 8080");
});


//Freelancer new user register route
app.post("/freelancer/signup",async (req,res)=>{
    try{
        let {UserName,Email,password} = req.body.Freelancer;
        let check = await freelancer.findOne({email: Email});
        if(check){
            console.log("Email already use");
            res.json("Email already in use");
        } 
        else{
            let demoUser = new freelancer({
                username: UserName,
                email: Email,
                password: password
            });
            demoUser.save().then((req,res)=>{
                console.log("User added successfuly");   
             }).catch((err)=>{
                console.log("Username already exist");
                res.json("Username already exist");
           });
        } 
    }catch(err){
        console.log(err);
    }
});


//Freelancer existing user login route
app.post("/freelancer/login",async (req,res)=>{
    try{
        let {Email,password} = req.body.Freelancer;
        let check = await freelancer.findOne({email: Email});
        //console.log(check);
        if(check){
            let currPassword = check.password;
            if(currPassword === password){
                console.log("Redirecting you to FREELANCER DASHBOARD");
                res.json("Redirecting you to FREELANCER DASHBOARD");
            }else{
                console.log("Wrong Password");
                res.json("Wrong Password");
            }
        }else{
            res.json("User does not exist, Create a new user");
            console.log("User does not exist, Create a new User");
        }
        
    }catch(err){
        console.log(err);
    }
});


//Client new user register route
app.post("/client/signup",async (req,res)=>{
    try{
        let {UserName,Email,password} = req.body.client;
        let check = await client.findOne({email: Email});
        if(check){
            console.log("Email already use");
            res.json("Email already in use");
        } 
        else{
            let demoUser = new client({
                username: UserName,
                email: Email,
                password: password
            });
            demoUser.save().then((req,res)=>{
                console.log("User added successfuly");   
             }).catch((err)=>{
                console.log("Username already exist");
                res.json("Username already exist");
           });
        } 
    }catch(err){
        console.log(err);
    }
});



//Client existing user login route
app.post("/client/login",async (req,res)=>{
    try{
        let {Email,password} = req.body.client;
        let check = await client.findOne({email: Email});
        //console.log(check);
        if(check){
            let currPassword = check.password;
            if(currPassword === password){
                console.log("Redirecting you to CLIENT DASHBOARD");
                res.json("Redirecting you to CLIENT DASHBOARD");
            }else{
                console.log("Wrong Password");
                res.json("Wrong Password");
            }
        }else{
            res.json("User does not exist, Create a new user");
            console.log("User does not exist, Create a new User");
        }
        
    }catch(err){
        console.log(err);
    }
});
