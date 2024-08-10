import { Schema, model, models } from "mongoose";

export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  country: string;
  street?: string;
  town?: string;
  province?: string;
  zipCode?: string;
  isActive?: boolean;
  isAdmin?: boolean;
  additionalInfo?: string;
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    country: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: false,
    },
    town: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    zipCode: {
      type: String,
      required: false,
    },
    additionalInfo: {
      type: String,
      required: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
  },
  { timestamps: true } // This will add the createdAt and updatedAt fields
);

const User =
  models?.User || model("User", UserSchema);

export default User;
