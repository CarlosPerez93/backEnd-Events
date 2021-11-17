import { Module } from '@nestjs/common';
import { PalceService } from './palce.service';
import { PalceController } from './palce.controller';

@Module({
  controllers: [PalceController],
  providers: [PalceService]
})
export class PalceModule {}
