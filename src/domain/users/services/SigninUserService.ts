import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import { authConfig } from '@config/auth';
import { HashProvider } from '@infra/di/providers/HashProvider/models/HashProvider';
import { AppError } from '@shared/errors/AppError';

import { CredentialsUserModel, PayloadUserModel } from '../models/SigninUserModel';
import { UserRepository } from '../repositories/UserRepository';

@injectable()
class SigninUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: UserRepository,

    @inject('HashProvider')
    private hashProvider: HashProvider,
  ) {}

  public async execute({ email, password }: CredentialsUserModel): Promise<PayloadUserModel> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário e/ou senha incorretos', 403);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Usuário e/ou senha incorretos', 403);
    }

    const { secret_token, expires_in_token } = authConfig;

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    return {
      user,
      token,
    };
  }
}

export { SigninUserService };
