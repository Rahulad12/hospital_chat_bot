import { createUser, loginUser } from '@/services/user.service';
import { AuthResponse, CreateUserDto, LoginUserDto } from '@/types/user.types';
import { generateToken } from '@/utils/generatetoken.helper';
import { NextFunction, Request, Response } from 'express';

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dto: LoginUserDto = req.body;
    const user = await loginUser(dto);

    const token = generateToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    const AuthResponse: AuthResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
    
    res.status(200).json({
      success: true,
      data: AuthResponse,
    });
  } catch (error) {
    next(error);
  }
};

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dto: CreateUserDto = req.body;
    const user = await createUser(dto);
    const AuthResponse: AuthResponse = {
      token: 'token',
      user: {
        name: user?.name || '',
        email: user?.email || '',
        role: user?.role || '',
      },
    };
    res.status(201).json({
      success: true,
      data: AuthResponse,
    });
  } catch (error) {
    next(error);
  }
};
