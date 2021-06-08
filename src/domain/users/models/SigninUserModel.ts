import { UserModel } from './UserModel'

interface CredentialsUserModel {
  email: string;
  password: string;
}

interface PayloadUserModel {
  user: UserModel,
  token: string
}

export { CredentialsUserModel, PayloadUserModel }
