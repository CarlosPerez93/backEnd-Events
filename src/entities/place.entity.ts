import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Even } from "./even.entity";
import { nameState } from "./nameState.entity";

@Entity()
export class Place {
    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column(() => nameState)
    place  : nameState
   
    @OneToMany(()=> Even, even => even.place)
    even : Even[];
}  