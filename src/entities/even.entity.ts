import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, OneToMany } from "typeorm";
import { Place } from "./place.entity";
import { TypeEvent } from "./type-event.entity";
import { User } from "./user.entity";

@Entity()
export class Even {

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column()
    description : string;  
      
    @Column()
    numParticipants : number;
    
    @Column()
    startDate : number;
    
    @Column()
    duration : number;

    @ManyToOne(() => User, user => user.even)
    @JoinColumn({name: 'fk_User'})
    user : User[];

    @ManyToOne(()=> Place, place => place.even)
    @JoinColumn({name:'fk_Place'})
    place : Place[];
    
    @ManyToOne(()=> TypeEvent, typeEvent => typeEvent)
    @JoinColumn({name:'fk_TypeEvent'})
    typeEvent: TypeEvent[];

}