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

    static async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            let user = await UserRepository.getUserById(req.params._id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    static async patchUser(req: Request, res: Response, next: NextFunction) {
        await UserRepository.updateUser(req.params._id, req.body)
        .then((doc) => {
            console.log(`Atualizado Usuário: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }

    static async deleteUser(req: Request, res: Response, next: NextFunction) {
        await UserRepository.deleteUser(req.params._id)
        .then((doc) => {
            console.log(`Removido Usuário: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }
}
