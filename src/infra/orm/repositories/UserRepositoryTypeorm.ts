import { getRepository, Repository } from 'typeorm';

import { CreateUserModel } from '@domain/accounts/models/CreateUserModel';
import { UserModel } from '@domain/accounts/models/UserModel'
import { UserRepository } from '@domain/accounts/repositories/UserRepository'

import { User } from '../entities/User';

class UserRepositoryTypeorm implements UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  /**
   * Create user
   */
  async create({
    name,
    email,
    password,
  }: CreateUserModel): Promise<UserModel> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  /**
   * List users
   */
  async find(): Promise<UserModel[]> {
    const users = await this.repository.find();

    return users;
  }

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UserRepositoryTypeorm };
