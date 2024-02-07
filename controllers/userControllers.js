const User = require('../models/User');

const getAllUsers =async(req,res)=>{
        try{
            User.find()
            .then((users)=>{
                console.log(users);
                res.status(200).json({users:users});
            })
            .catch((error)=>{
                console.log(error);
                res.status(500).json({message:"Unable to get users"});
            })
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Unable to get users"});
        }
}

const postNewUser =async (req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save()
        .then(()=>{
            res.status(200).json({message:"Successfully saved"});
        })
        .catch((error)=>{
            console.log(error);

            if(error.code === 11000 && error.keyPattern && error.keyPattern.emailID)
            {
                res.status(500).json({message:"Email address is already in use"});
            }
            else{
                res.status(500).json({message:"Unable to create a new user"});
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Unable to save new user"})
    }
}

const updateUser =async(req,res)=>{
        try{
            const id= req.params.id;
            const updatedUser = req.body;
            await User.findOneAndUpdate({_id:id},updatedUser,{new:true})
            .then((updatedUser)=>{
                console.log(updatedUser);
                res.status(200).json({message:"User data updated successfully",user:updatedUser});
            })
            .catch((error)=>{
                console.log(error);
                res.status(500).json({message:"Unable to update the user data"});
            })
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Unable to update the user data"});
        }
}

const deleteUser =async(req,res)=>{
        try{
            const id= req.params.id;
            await User.findByIdAndDelete(id)
            .then((deleteUser)=>{
                console.log(deleteUser);
                res.status(200).json({message:"User data deleted successfully",user:deleteUser});
            })
            .catch((error)=>{
                console.log(error);
                res.status(500).json({message:"Unable to delete the user data"});
            })
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Unable to delete the user data"});
        }
}

module.exports={getAllUsers,postNewUser,updateUser,deleteUser};
