import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IPlayer } from './player.interface';
import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}
  @Get()
  findAll(): any {
    return this.playerService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Player> {
    return await this.playerService.findOne(id);
  }

  @Post()
  async create(@Body('player') player: IPlayer): Promise<Player> {
    return await this.playerService.create(player);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('player') player: IPlayer,
  ): Promise<Player> {
    return await this.playerService.update(id, player);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.playerService.delete(id);
  }
}
