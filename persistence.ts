import {UserModel} from './schemes';
import {User} from './entities';

export class UserRepository {
    static async create(user: User): Promise<User> {
        let new_user = await UserModel.create(user);
        return new_user.save();
    }
}  