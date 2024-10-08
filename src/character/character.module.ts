import { Module } from '@nestjs/common';
import { characterProviders } from './character.provider';

@Module({
  exports: characterProviders,
})
export class CharacterModule {}
