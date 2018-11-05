import { Router } from 'express';
import { UserController } from './controllers/userController';

const router = Router();

router
    .post('/admin/usuario', UserController.postUser)
    .get('/admin/usuarios', UserController.getUsers)
    .get('/admin/usuario/:_id', UserController.getUserById);  

    export {router};