import {Document, model, Schema,} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import {User} from './entities';

interface UserDocument extends User, Document {}

const userSchema = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    access_level: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

export const UserModel = model<UserDocument>('User', userSchema, 'users');