import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { Even } from './even.entity';
import { Profile } from './profile.entity';
import { Role } from './role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: 'varchar'})
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    state: boolean;

    @OneToMany(() => Role, role => role.user)
    role: Role[];

    @ManyToOne (() => Profile, profiile => profiile.user)
    @JoinColumn({name : 'fk_Profile'})
    profile: Profile[];

    @OneToMany(() => Even, even => even)
    even: Even[];

}