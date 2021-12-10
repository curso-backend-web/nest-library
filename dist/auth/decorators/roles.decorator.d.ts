import { Role } from '../model/enum.decorator';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
