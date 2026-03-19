import User, { UserDocument } from '@/models/user.schema';
import { CreateUserDto, LoginUserDto } from '@/types/user.types';
import { AppError } from '@/utils/error.helper';
import bcrypt from 'bcryptjs';

export const loginUser = async (dto: LoginUserDto): Promise<UserDocument> => {
  const user = await User.findOne({ email: dto.email });
  if (!user) {
    throw AppError.notFound('Invalid Credentails');
  }
  const isPasswordValid = await bcrypt.compare(dto.password, user.password);
  if (!isPasswordValid) {
    throw AppError.unauthorized('Invalid Credentails');
  }
  return user;
};

export const createUser = async (dto: CreateUserDto): Promise<UserDocument> => {
  const existingUser = await User.findOne({ email: dto.email });
  if (existingUser) {
    throw AppError.conflict('Email already exists');
  }
  const hashedPassword = await bcrypt.hash(dto.password, 10);
  const user = new User({
    ...dto,
    name: dto.name.toLowerCase(),
    password: hashedPassword,
  });
  await user.save();
  return user;
};
