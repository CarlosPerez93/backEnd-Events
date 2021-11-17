import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalceService } from './palce.service';
import { CreatePalceDto } from './dto/create-palce.dto';
import { UpdatePalceDto } from './dto/update-palce.dto';

@Controller('palce')
export class PalceController {
  constructor(private readonly palceService: PalceService) {}

  @Post()
  create(@Body() createPalceDto: CreatePalceDto) {
    return this.palceService.create(createPalceDto);
  }

  @Get()
  findAll() {
    return this.palceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalceDto: UpdatePalceDto) {
    return this.palceService.update(+id, updatePalceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palceService.remove(+id);
  }
}
