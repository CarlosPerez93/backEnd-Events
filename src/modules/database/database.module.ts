import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port:3306,
            username: 'root',
            password: 'root',
            database: 'eventos',
            entities:[

            ],
            synchronize:true
        })
    ]
})
export class DatabaseModule {
    constructor( private readonly connection:Connection){

    }
}

