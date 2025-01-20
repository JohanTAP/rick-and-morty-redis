import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import axios from 'axios';
import { Character, CharacterResponse } from './interfaces';

@Injectable()
export class RickAndMortyService implements OnModuleInit {
  private redisClient: RedisClientType;

  async onModuleInit() {
    this.redisClient = createClient({
      url: 'redis://127.0.0.1:6379',
    });

    await this.redisClient.connect();
    console.log('Redis client connected');
  }

  public async getAllCharacters(): Promise<CharacterResponse> {
    try {
      const cached = await this.redisClient.get('character');

      if (cached) {
        console.log('Returning data from cache');
        return JSON.parse(cached) as CharacterResponse;
      }

      const { data } = await axios.get<CharacterResponse>(
        'https://rickandmortyapi.com/api/character',
      );

      await this.redisClient.set('character', JSON.stringify(data));

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getCharacterById(id: string): Promise<Character> {
    try {
      const cached = await this.redisClient.get(id);
      if (cached) {
        console.log('Returning data from cache (character by id)');
        return JSON.parse(cached) as Character;
      }

      const { data } = await axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`,
      );

      await this.redisClient.set(id, JSON.stringify(data));

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }
}
