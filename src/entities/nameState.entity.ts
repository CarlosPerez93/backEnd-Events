import {Column} from "typeorm";

export class nameState {

    @Column()
    name: string;

    @Column()
    state: boolean;

}