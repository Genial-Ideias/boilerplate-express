interface UserModel {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export { UserModel };
