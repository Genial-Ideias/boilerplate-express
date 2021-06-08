import { container } from 'tsyringe';

import './providers';

import { UserRepositoryTypeorm } from '@infra/orm/repositories/UserRepositoryTypeorm';
import { UserRepository } from '@domain/users/repositories/UserRepository';

container.registerSingleton<UserRepository>(
  'UserRepository',
  UserRepositoryTypeorm,
);
