import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(email: string, password: string) {
    const user = this.userRepository.create({ email, password });

    return this.userRepository.save(user);
  }

  async findOneById(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  findByEmail(email: string) {
    return this.userRepository.find({ where: { email } });
  }

  async update(userId: number, attrs: Partial<User>) {
    const user = await this.findOneById(userId);

    Object.assign(user, attrs);

    return this.userRepository.save(user);
  }

  async remove(userId: number) {
    const user = await this.findOneById(userId);
    return this.userRepository.remove(user);
  }
}
