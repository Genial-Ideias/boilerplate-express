import { CreateUserModel } from '../models/CreateUserModel';
import { UserModel } from '../models/UserModel';

interface UserRepository {
  create(data: CreateUserModel): Promise<UserModel>;
  find(): Promise<UserModel[]>;
  findByEmail(id: string): Promise<UserModel>;
}

export { UserRepository };
