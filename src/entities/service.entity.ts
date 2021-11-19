import { profile } from "console";
import { Entity,  PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { nameState } from "./nameState.entity";
import { Profile } from "./profile.entity";

@Entity()
export class Service {

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column(() => nameState)
    service : nameState;

    @OneToMany(() => Profile, profile => profile.service)
    profile: Profile[];
    
}