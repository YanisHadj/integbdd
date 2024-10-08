import { Inject, Injectable } from '@nestjs/common';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }
  async create(player: IPlayer): Promise<Player> {
    return await this.playerRepository.create<Player>({
      ...player,
      password: bcrypt.hashSync(player.password, 10),
    });
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne<Player>({ where: { id } });
  }

  async update(id: number, player: IPlayer): Promise<Player> {
    const existingPlayer = await this.findOne(id);
    if (!existingPlayer) {
      return null;
    }
    if (player.password) {
      player.password = bcrypt.hashSync(player.password, 10);
    }
    await this.playerRepository.update(player, { where: { id } });
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.playerRepository.destroy({ where: { id } });
    return result > 0;
  }
}
