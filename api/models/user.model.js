import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    }
    ,
    email : {
        type:String,
        required:true,
        unique:true,
    }
    ,
    password: {
        type:String,
        required:true,
        
    },
    avatar: {
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcyZjoM2KSmuCc84spk_B836TH7G5nl9AL-2Y0n_MEQ&s"
    },
}, {timestamps:true}
)

const User = mongoose.model('User', userSchema);

export default User;