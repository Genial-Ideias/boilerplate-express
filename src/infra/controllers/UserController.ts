import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@domain/users/services/CreateUserService';
import { SigninUserService } from '@domain/users/services/SigninUserService';

class UserController {
  /**
   * POST api/v1/users/signin
   */
   async signin(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const signinService = container.resolve(SigninUserService);

    const user = await signinService.execute({
      email,
      password,
    });

    return response.json(user);
  }

  /**
   * POST api/v1/users
   */
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user).status(201);
  }
}

export { UserController };
