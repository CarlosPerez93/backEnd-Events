import { Injectable } from '@nestjs/common';
import { CreatePalceDto } from './dto/create-palce.dto';
import { UpdatePalceDto } from './dto/update-palce.dto';

@Injectable()
export class PalceService {
  create(createPalceDto: CreatePalceDto) {
    return 'This action adds a new palce';
  }

  findAll() {
    return `This action returns all palce`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palce`;
  }

  update(id: number, updatePalceDto: UpdatePalceDto) {
    return `This action updates a #${id} palce`;
  }

  remove(id: number) {
    return `This action removes a #${id} palce`;
  }
}
