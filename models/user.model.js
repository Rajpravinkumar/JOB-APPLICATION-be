
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    /* profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, // URL to resume file
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
        profilePhoto:{
            type:String,
            default:""
        }
    }, */

    profileImage: {
      type: String,
      required: true,
      default:
        " https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1741253497~exp=1741257097~hmac=5aaca1a40eb19d58eaf13a5097ac2b698dace19f92388ffb8300800538430c90&w=1480",
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);