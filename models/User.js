const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required:[true,"First name is required"],
            minLength:3,
            maxLength:20,
            trim:true,
        },
        lastName:{
            type: String,
            required:[true,"Last name is required"],
            minLength:3,
            maxLength:20,
            trim:true,
        },
        emailID:{
            type:String,
            required:[true,"Email ID is required"],
            unique:true
        }

    }
);
const User = mongoose.model("user_info",userSchema);
module.exports = User;
