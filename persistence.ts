import {UserModel} from './schemes';
import {User} from './entities';
import { Types } from 'mongoose';

export class UserRepository {
    static async create(user: User): Promise<User> {
        let new_user = await UserModel.create(user);
        return new_user.save();
    }

    static async getUsers(): Promise<User[]> {
        return await UserModel.find().exec();
    }

    static async getUserById(id: string): Promise<any> {
        if(Types.ObjectId.isValid(id)) {
            return await UserModel.findById(id).exec();
        } else {
            throw new Error('ObjectId Invalid!');
        }
    }
}  