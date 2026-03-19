// users dto
export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserResponse {
    name: string;
    email: string;
    role: string;
}

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface AuthPayload {
  id: string;
  email: string;
  role: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
