import {Request, Response, NextFunction} from 'express';
import {UserRepository} from '../persistence';

export class UserController {
    static async postUser(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body.login) {
                res.sendStatus(400);
            } else {
                let user = await UserRepository.create(req.body);
                console.log(`Cadastrado Usuário: \n ${user}`); 
                res.json(user);
            }
        } catch (error) {
            next(error);
        }
    }

    static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            let users = await UserRepository.getUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
}
