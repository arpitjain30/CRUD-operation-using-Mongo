import express from 'express';
import {
    handlewelcome,
    handleAndShowUser,
    handleAndAddUser,
    handleAndRemoveUser,
    handleAndUpdateUser,
} from './routerFunction.js'

const routes = express.Router();

routes.get('/', handlewelcome);
routes.get('/user', handleAndShowUser);
routes.post('/user/submit', handleAndAddUser);
routes.patch('/user/update', handleAndUpdateUser);
routes.delete('/user/delete', handleAndRemoveUser);

export default routes;