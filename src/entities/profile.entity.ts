import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Qualification } from "./qualification.entity";
import { Service } from "./service.entity";
import { User } from "./user.entity";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column()
    firstName : string;
    
    @Column()
    secondName : string;
    
    @Column()
    firstSurname : string;
    
    @Column()
    secondSurname : string;

    @OneToMany(() => User, user => user.profile)
    user : User[];

    @ManyToOne(() => Service, service => service.profile)
    @JoinColumn({name:'fk_Service'})
    service: Service[];

    @ManyToOne(() => Qualification, qualification => qualification)
    @JoinColumn({name:'fk_Qualification'})
    qualification : Qualification[];
    
}