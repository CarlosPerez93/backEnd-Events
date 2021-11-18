import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { QualificationModule } from './qualification/qualification.module';
import { ProfileModule } from './profile/profile.module';
import { RoleModule } from './role/role.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PalceModule } from './palce/palce.module';
import { TypeEventModule } from './type-event/type-event.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [UserModule, RoleModule, ProfileModule, QualificationModule, ServiceModule, ProductModule, EventModule, PalceModule, TypeEventModule, DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
