import { AuthService } from './auth.service';
export declare class AuthResolver {
    private auth;
    constructor(auth: AuthService);
    register(email: string, password: string, role: 'admin' | 'user'): Promise<{
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    me(user: any): {
        email: any;
        role: any;
    };
}
