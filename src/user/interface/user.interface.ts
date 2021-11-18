export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    state: boolean;
    fk_role: number;
    fk_profile: number;
}