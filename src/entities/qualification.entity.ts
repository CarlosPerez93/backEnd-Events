import { profile } from "console";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { nameState } from "./nameState.entity";
import { Profile } from "./profile.entity";

@Entity()
export class Qualification {

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column(()=>nameState)
    qualification : nameState;
     
    @OneToMany(() => Profile, profile => profile.qualification)
    profile : Profile[];
}