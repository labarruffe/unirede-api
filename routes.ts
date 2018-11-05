import { Router } from 'express';
import { UserController } from './controllers/userController';

const router = Router();

router
    .post('/user', UserController.postUser)
    .get('/users', UserController.getUsers)
    .get('/user/:_id', UserController.getUserById)  
    .patch('/user/:_id', UserController.patchUser)
    .delete('/user/:_id', UserController.deleteUser);

export {router};