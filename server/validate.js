const conn = require("./db/conn");
const Register = require("./models/userRegisters");

module.exports.validate = async function(userDetails) {
    let validationDetails = {
        firstName: "Looks Good!",
        lastName: "Looks Good!",
        username: "Looks Good!",
        email: "Looks Good!",
        password: "Looks Good!",
        confirmPassword: "Looks Good!",
        allGood: true
    };
    await Register.findOne({email: userDetails.email}).then(
        (userData) => {
            if(userData != null){
                validationDetails.email = "email already exist";
            } 
        },
    );

    await Register.findOne({username: userDetails.username}).then(
        (userData) => {
            if(userData != null){
                validationDetails.username = "username already exist";
            }  
        }
    )

    if(!(userDetails.password.length>8)){
        validationDetails.password = "password should be more than 8 characters";
        validationDetails.allGood = false;
    }
    if(!(userDetails.password === userDetails.cpassword)){
        validationDetails.confirmPassword = "passwords don't match";
        validationDetails.allGood = false;
    }

    return validationDetails;
}