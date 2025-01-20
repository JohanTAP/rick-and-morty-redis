import { Controller, Get, Param } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { Character, CharacterResponse } from './interfaces';

@Controller('character')
export class RickAndMortyController {
  constructor(private readonly rmService: RickAndMortyService) {}

  @Get()
  async getAllCharacters(): Promise<CharacterResponse> {
    return this.rmService.getAllCharacters();
  }

  @Get(':id')
  async getCharacter(@Param('id') id: string): Promise<Character> {
    return this.rmService.getCharacterById(id);
  }
}
