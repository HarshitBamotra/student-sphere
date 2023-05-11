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
                profileImage: {url: "https://res.cloudinary.com/dx6m1kdeg/image/upload/v1683792822/student%20sphere/Default_pfp.svg_npswwx.png"},
                coverImage: {url : "https://res.cloudinary.com/dx6m1kdeg/image/upload/v1683792824/student%20sphere/default-cover_nrttcq.png"}
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

app.get("/userDetail", (req, res) => {
    // res.json({id: userDetail._id});
    res.json({userDetail: userDetail });
});
app.post("/imageUpload", async function (req, res) {
    try {
        // console.log(req.body);
        if (!req.body.imageName) {
            let timestamp = dateTime.getTimestamp();
            const newPost = new Post({
                caption: req.body.caption,
                postUsername: req.body.username,
                postUserProfile: req.body.userProfile,
                timestamp: timestamp
            });
            const savedPost = await newPost.save();
            Register.findOneAndUpdate({username: req.body.username }, { $push: { posts: newPost } }).
                then(
                    () => {
                        console.log("posts updated");
                    }
                )
        }
        else if (req.body.imageName) {
            const uploadRes = await cloudinary.uploader.upload(req.body.imageName, {
                upload_preset: "student-sphere-posts"
            });

            if (uploadRes) {
                let timestamp = dateTime.getTimestamp();
                if (req.body.caption) {
                    const newPost = new Post({
                        caption: req.body.caption,
                        imageName: uploadRes,
                        postUsername: req.body.username,
                        postUserProfile: req.body.userProfile,
                        timestamp: timestamp
                    });
                    const savedPost = await newPost.save();
                    
                    Register.findOneAndUpdate({username: req.body.username }, { $push: { posts: newPost } }).then(
                        () => {
                            console.log("posts updated");
                        }
                    );
                }
                else {
                    const newPost = new Post({
                        caption: "",
                        imageName: uploadRes,
                        postUsername: req.body.username,
                        postUserProfile: req.body.userProfile,
                        timestamp: timestamp
                    });
                    const savedPost = await newPost.save();
                    
                    Register.findOneAndUpdate({username: req.body.username }, { $push: { posts: newPost } }).then(
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

app.get("/posts", async (req, res) => {
    Post.find().then(
        (allPosts) => { 
            res.json({allPosts: allPosts});
        }
    )

});

// adding of comments 

app.post("/comment", async (req, res)=> {
    try{
        Post.findOneAndUpdate({_id: req.body.postId}, {$push: {comments: req.body.comment}}).then(
            () => {
              console.log("comments are added");
            }
        )
    } catch(error){
        console.log(error);
    }
    
});

// deleteing a post 

app.post("/deletePost", async (req, res) => {
    try{
        Post.findOneAndDelete({_id: req.body.postId}).then(
            () =>{
                console.log("post has been deleted ");
            }
        )
    } catch(error){
        console.log(error);
    }
});

// updating profile section

app.post("/updateProfileImage", async (req, res) => {

    try{
        if(req.body.profileImage){
            const uploadRes = await cloudinary.uploader.upload(req.body.profileImage, {
                upload_preset: "student-sphere-profile"
            });
            Register.findOneAndUpdate({username: req.body.username}, {profileImage: uploadRes}).then(
                () => {
                    console.log("profile image updated");
                }
            )
            
            // to update profile image for rest of the post of a user
            await Post.updateMany({postUsername: req.body.username}, {postUserProfile: uploadRes});
        }
        

        
    } catch(error){
        console.log(error);
    }
});

app.post("/updateCover", async (req, res) => {
    try{
        if(req.body.coverImage){
            const uploadRes = await cloudinary.uploader.upload(req.body.coverImage, {
                upload_preset: "student-sphere-cover"
            });
            Register.findOneAndUpdate({username: req.body.username}, {coverImage: uploadRes}).then(
                () => {
                    console.log("cover image updated");
                }
            )
            
        } 
    } catch(error){
        console.log(error);
    }
});

app.post("/updateBio", async (req, res) => {
    try{
        Register.findOneAndUpdate({username: req.body.username}, {bio: req.body.bio}).then(
            () => {
                console.log("bio updated");
            }
        );
    } catch(error){
        console.log(error);
    }
});

app.listen(5000, function () {
    console.log("server is running on port 5000");
});