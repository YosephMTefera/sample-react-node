import User from "../model/User.js";

export const getAllUsers = async (req,res)=>{
    try {
        const getUsers = await User.find();

        if(getUsers?.length ===0){
            return res.status(404).json({message:'no user found'})
        }

        return res.status(200).json(getUsers);
        
    } catch (error) {
        return res.status(500).json({message:'something went wrong',error:error.message})
    }
}

export const createUser = async (req,res)=>{
    const {firstname,middlename,lastname,username,email,phone} = req.body;
    try {
        const createUser = await User.create({
            firstname,
            middlename,
            lastname,
            username,
            email,
            phone
        })

        if(!createUser){
            return res.status(400).json({message:"user could not be created"})
        }

        return res.status(200).json({message:`${firstname} ${middlename} ${lastname} created sucessfully`})
        
    } catch (error) {
        return res.status(500).json({message:'something went wrong',error:error.message})
        
    }
}