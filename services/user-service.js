import { UserModel } from "../models/user-model.js"

export const UserService = {
    async create(user) {
        await UserModel.create(user)
    },
    async getAllUsers() {
        return await UserModel.find()
    }
} 