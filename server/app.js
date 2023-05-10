const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const conn = require("./db/conn");
const Register = require("./models/userRegisters");
const Post = require("./models/posts");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const validateForm = require(__dirname + "/validate.js")
const cloudinary = require(__dirname + "/cloudinary.js");
const Trial = require("./models/trial.js");
const { log } = require("console");

const dateTime = require(__dirname + "/date.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send("hello");
});



app.post("/register", async function (req, res) {
    const doj = dateTime.getDOJ();
    console.log(req.body);
    try {

        console.log(req.body.password);
        console.log(req.body.cpassword);
        if ((req.body.password == req.body.cpassword) && req.body.password.length > 8) {
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
            res.json({ isCorrect: true });
            //console.log("check");
        } else {
            const validationDetails = await validateForm.validate(req.body);
            console.log(validationDetails);
            res.json({ isCorrect: validationDetails.allGood });
        }




    } catch (error) {
        console.log(error);
        const validationDetails = await validateForm.validate(req.body);
        console.log(validationDetails);
        res.json({ isCorrect: validationDetails.allGood });
    }
});

let userDetail = {};

app.post("/login", async function (req, res) {
    try {
        //console.log(req.body);
        const user = await Register.findOne({ email: req.body.email });
        if (user != null) {
            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if (isMatch) {
                userDetail = user;
                //console.log(userDetail);
                res.json({ isCorrect: true });

            } else {
                //res.send("invalid login details");
                res.json({ isCorrect: false });
            }
        } else {
            res.json({ isCorrect: false });
        }

    } catch (error) {
        console.log(error);
        res.json({ isCorrect: false });
    }
});

app.get("/userID", (req, res) => {
    // res.json({id: userDetail._id});
    res.json({ id: userDetail._id });
});
app.post("/imageUpload", async function (req, res) {
    try {
        // console.log(req.body);
        if (!req.body.imageName) {
            let timestamp = dateTime.getTimestamp();
            const newPost = new Post({
                caption: req.body.caption,
                postUserId: req.body.postUserId,
                timestamp: timestamp
            });
            const savedPost = await newPost.save();
            //console.log(savedPost);
            console.log(newPost);
            // console.log(userDetail._id);
            console.log(req.body.postUserId);
            Register.findOneAndUpdate({ _id: req.body.postUserId }, { $push: { posts: newPost } }).
                then(
                    () => {
                        console.log("posts updated");
                    })
        }
        else if (req.body.imageName) {
            const uploadRes = await cloudinary.uploader.upload(req.body.imageName, {
                upload_preset: "project-community-website"
            });
            // console.log(uploadRes);
            // kuch bhi karo saalo

            if (uploadRes) {
                let timestamp = dateTime.getTimestamp();
                if (req.body.caption) {
                    const newPost = new Post({
                        caption: req.body.caption,
                        imageName: uploadRes,
                        postUserId: req.body.postUserId,
                        timestamp: timestamp
                    });
                    const savedPost = await newPost.save();
                    //console.log(savedPost);
                    console.log(newPost);
                    // console.log(userDetail._id);
                    console.log(req.body.postUserId);
                    Register.findOneAndUpdate({ _id: req.body.postUserId }, { $push: { posts: newPost } }).then(
                        () => {
                            console.log("posts updated");
                        }
                    );
                }
                else {
                    const newPost = new Post({
                        caption: "",
                        imageName: uploadRes,
                        postUserId: req.body.postUserId,
                        timestamp: timestamp
                    });
                    const savedPost = await newPost.save();
                    //console.log(savedPost);
                    console.log(newPost);
                    // console.log(userDetail._id);
                    console.log(req.body.postUserId);
                    Register.findOneAndUpdate({ _id: req.body.postUserId }, { $push: { posts: newPost } }).then(
                        () => {
                            console.log("posts updated");
                        }
                    );
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
});


app.listen(5000, function () {
    console.log("server is running on port 5000");
});