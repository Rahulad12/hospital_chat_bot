import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '@/types/user.types';

export interface UserDocument extends Omit<IUser, 'id'>, Document {}

const userSchema: Schema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<UserDocument>('User', userSchema);
export default User;