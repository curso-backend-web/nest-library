import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository <User>){ }

  async create(createUserDto: CreateUserDto) {

    const user = new User()
    Object.assign(user,createUserDto)

    return await this.userRepository.save(user)


    return `This action adds a new user: ${createUserDto}`
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id)
  }

}
