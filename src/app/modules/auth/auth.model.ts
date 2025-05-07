import { model, Schema } from "mongoose";
import { AuthUser } from "./auth.interface";

const authSChema = new Schema<AuthUser>({

 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});




const Auth= model<AuthUser>("Auth", authSChema, );
export default Auth;