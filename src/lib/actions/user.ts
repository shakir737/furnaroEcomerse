"use server";
import { connectToDatabase } from "../database/connection/mongoose";
import User, {IUser} from "../database/models/user.model";
import bcrypt from "bcrypt";

export async function createUser(data: IUser) {
   const {firstName,lastName, password, phone, email, country} = data;
   
    try {
        await connectToDatabase();
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          country,
          phone,
        });
    
        await newUser.save();
        const allUsers =  User.find()
        console.log(allUsers);
      } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
      }
    
  }