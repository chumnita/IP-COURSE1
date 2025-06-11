import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  // ✅ Create a new user
  createUser(body: CreateUserDto) {
    this.users.push(body);
    return body;
  }

  // ✅ Get user by username
  getUser(username: string) {
    const user = this.users.find(u => u.username === username);
    if (!user) {
      throw new NotFoundException(`User with username '${username}' not found`);
    }
    return user;
  }

  // ✅ Update user by username
  updateUser(username: string, updatedData: Partial<CreateUserDto>) {
    const user = this.users.find(u => u.username === username);
    if (!user) {
      throw new NotFoundException(`User with username '${username}' not found`);
    }
    Object.assign(user, updatedData);
    return user;
  }

  // ✅ Delete user by username
  deleteUser(username: string) {
    const index = this.users.findIndex(u => u.username === username);
    if (index === -1) {
      throw new NotFoundException(`User with username '${username}' not found`);
    }
    this.users.splice(index, 1);
    return { message: 'User deleted successfully' };
  }
}
