import { Test, TestingModule } from '@nestjs/testing';
import { PalceService } from './palce.service';

describe('PalceService', () => {
  let service: PalceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalceService],
    }).compile();

    service = module.get<PalceService>(PalceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
