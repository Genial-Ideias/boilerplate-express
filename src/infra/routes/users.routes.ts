import { Router } from 'express';

import { createUserValidator, signinUserValidator } from '@domain/users/validators/users.validators';

import { UserController } from '../controllers/UserController';

const usersRoutes = Router();

const userController = new UserController();

usersRoutes.post('/', createUserValidator, userController.create);
usersRoutes.post('/signin', signinUserValidator, userController.signin);

export { usersRoutes };
