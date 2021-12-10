export declare class User {
    id: number;
    email: string;
    password: string;
    photo: string;
    role: string;
    hashPassword(): Promise<void>;
}
