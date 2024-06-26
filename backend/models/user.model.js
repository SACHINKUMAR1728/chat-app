import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fullname :{
            type: String,
            required: true
        },
        username :{
            type: String,
            unique: true,
            required: true
        },
        password :{
            type: String,
            required: true
        },
        // phonenumber :{
        //     type: Number,
        //     required: true
        // },
        gender :{
            type: String,
            required: true,
            enum : ["male","female"]
        },
        profilepic:{
            type: String,
            default :""
        }
        // createdAt, updatedAt
    },{timestamps: true}
)

const User = mongoose.model("User", userSchema);

export default User;