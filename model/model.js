import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    gender:{
        type: String,
        require: true,
    }
})

const User = mongoose.model("User", userSchema);

export default User;