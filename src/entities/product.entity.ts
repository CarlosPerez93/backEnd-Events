import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { nameState } from "./nameState.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column(()=> nameState)
    product : nameState;
}