import { Test, TestingModule } from '@nestjs/testing';
import { PalceController } from './palce.controller';
import { PalceService } from './palce.service';

describe('PalceController', () => {
  let controller: PalceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalceController],
      providers: [PalceService],
    }).compile();

    controller = module.get<PalceController>(PalceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
