import { Inject, Injectable } from '@nestjs/common';
import { Character } from './character.entity';
import { ICharacter } from './character.interface';

@Injectable()
export class characterService {
  constructor(
    @Inject('character_REPOSITORY')
    private characterRepository: typeof Character,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterRepository.findAll<Character>();
  }
  async create(character: ICharacter): Promise<Character> {
    return await this.characterRepository.create<Character>({
      ...character,
    });
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne<Character>({ where: { id } });
  }

  async update(id: number, character: ICharacter): Promise<Character> {
    const existingcharacter = await this.findOne(id);
    await this.characterRepository.update(character, { where: { id } });
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.characterRepository.destroy({ where: { id } });
    return result > 0;
  }
}
