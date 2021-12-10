export declare class Encryptation {
    static encryptPassword(password: string): Promise<string>;
    static comparePassword(password: string, hash: string): Promise<boolean>;
}
