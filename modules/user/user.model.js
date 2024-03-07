import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, maxLenght:50},
    lastName: {type:String, required:true, maxLenght:50},
    user: {type:String, required:true, maxLenght:30, unique:true},
    email: {type:String, required:true, maxLenght:100, unique:true},
    password: {type:String, required:true},
})

export default mongoose.models.User || mongoose.model('User', UserSchema)