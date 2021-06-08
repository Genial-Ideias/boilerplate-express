import { inject, injectable } from 'tsyringe';

import { HashProvider } from '@infra/di/providers/HashProvider/models/HashProvider';
import { AppError } from '@shared/errors/AppError';

import { UserModel } from '../models/UserModel';
import { CreateUserModel } from '../models/CreateUserModel';
import { UserRepository } from '../repositories/UserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: UserRepository,

    @inject('HashProvider')
    private hashProvider: HashProvider,
  ) {}

  public async execute({ name, email, password }: CreateUserModel): Promise<UserModel> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('Esse e-mail já esta sendo utilizado');
    }

    const passwordHash = await this.hashProvider.generateHash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService };
