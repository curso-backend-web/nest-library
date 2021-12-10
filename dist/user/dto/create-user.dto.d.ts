import { LoginUserDto } from '../../auth/model/login.dto';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<LoginUserDto>>;
export declare class CreateUserDto extends CreateUserDto_base {
    readonly photo: string;
    readonly role: string;
}
export {};
