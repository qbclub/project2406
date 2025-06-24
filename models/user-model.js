import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
})

export const UserModel = model('User', UserSchema, 'users')