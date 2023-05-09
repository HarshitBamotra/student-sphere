const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const conn = require("./db/conn");
const Register = require("./models/userRegisters");
const Post = require("./models/posts");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const validateForm = require(__dirname+"/validate.js")

const { log } = require("console");

const dateTime = require(__dirname+"/date.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.send("hello");
});



app.post("/register",async function(req,res){
    const doj = dateTime.getDOJ();
    console.log(req.body);
    try{
        
        console.log(req.body.password);
        console.log(req.body.cpassword);
        if((req.body.password == req.body.cpassword) && req.body.password.length>8){
            const newUser = new Register({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                dateOfJoining: doj,
                profileImage: "defaultProfileImage.jpg",
                coverImage: "defaultCoverImage.png"
            });
            await newUser.save(); 
            res.json({isCorrect: true});
            //console.log("check");
        } else {
            const validationDetails = await validateForm.validate(req.body);
            console.log(validationDetails);
            res.json({isCorrect: validationDetails.allGood});
        }
        

        
        
    }catch(error){
        console.log(error);
        const validationDetails = await validateForm.validate(req.body);
        console.log(validationDetails);
        res.json({isCorrect: validationDetails.allGood});
    }
});

const userDetail = {};

app.post("/login", async function(req, res){
    try{
        console.log(req.body);
        const user = await Register.findOne({email: req.body.email});
        if(user != null){
            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if(isMatch){
                userDetail = user;
                res.json({isCorrect: true});
                
            } else {
                //res.send("invalid login details");
                res.json({isCorrect: false});
            }
        } else {
            res.json({isCorrect: false});
        }
        
    }catch(error) {
        console.log(error);
        res.json({isCorrect: false});
    }
});

app.get("/userID",(req,res)=>{
    // res.json({id: userDetail._id});
    res.json({id:1234});
});


app.listen(5000, function(){
    console.log("server is running on port 5000");
});