import { Entity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Even } from "./even.entity";
import { nameState } from "./nameState.entity";

@Entity()
export class TypeEvent{

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column(()=> nameState)
    type_event: nameState;

    @OneToMany(() => Even, even => even.typeEvent)
    even: Even[];
    
}