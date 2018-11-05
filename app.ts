import express from 'express';
import cors from 'cors';
import {router} from './routes';
import {json} from 'body-parser';

const app = express();
app.use(cors());
app.use(json());
app.use('/unirededb', router);

export {app};