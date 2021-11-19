import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { nameState } from "./nameState.entity";
import { User } from "./user.entity";

@Entity()
export class Role {

    @PrimaryGeneratedColumn("increment")
    id : number;
    
    @Column(() => nameState)
    role: nameState;
    
    @ManyToOne(() => User, user => user.role)
    @JoinColumn({name: 'fk_User'})
    user : User[];

}