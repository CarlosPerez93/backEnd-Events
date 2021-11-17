export class CreateUserDto {

    username: string;
    email: string;
    password: string;
    state: boolean;
    fk_role: number;
    fk_profile: number;
}
