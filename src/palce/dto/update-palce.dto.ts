import { PartialType } from '@nestjs/mapped-types';
import { CreatePalceDto } from './create-palce.dto';

export class UpdatePalceDto extends PartialType(CreatePalceDto) {}
