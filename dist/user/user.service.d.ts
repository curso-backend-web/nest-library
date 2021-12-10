import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(email: string): Promise<User>;
}
