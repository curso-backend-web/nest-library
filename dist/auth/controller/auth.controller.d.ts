import { AuthService } from '../service/auth.service';
import { LoginUserDto } from '../model/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
