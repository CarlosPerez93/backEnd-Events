import { Module } from '@nestjs/common';
import { TypeEventService } from './type-event.service';
import { TypeEventController } from './type-event.controller';

@Module({
  controllers: [TypeEventController],
  providers: [TypeEventService]
})
export class TypeEventModule {}
