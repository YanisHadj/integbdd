import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICharacter } from './character.interface';
import { characterService } from './character.service';
import { Character } from './character.entity';

@Controller('character')
export class characterController {
  constructor(private characterService: characterService) {}
  @Get()
  findAll(): any {
    return this.characterService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Character> {
    return await this.characterService.findOne(id);
  }

  @Post()
  async create(@Body('character') character: ICharacter): Promise<Character> {
    return await this.characterService.create(character);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('character') character: ICharacter,
  ): Promise<Character> {
    return await this.characterService.update(id, character);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.characterService.delete(id);
  }
}
