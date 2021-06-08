import { Router } from 'express';

import { usersRoutes } from '@infra/routes/users.routes'


const router = Router();

router.use('/users', usersRoutes)

export { router };
