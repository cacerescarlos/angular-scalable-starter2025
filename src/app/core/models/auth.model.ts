export interface AuthSession {
    token: string;
    userId: number;
    userName: string;
    isAdmin: boolean;
    permission?: any[];
}
