import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import axios from 'axios';
import { CreateBibliaDto } from './dto/create-biblia.dto';
import { UpdateBibliaDto } from './dto/update-biblia.dto';
import { Biblia, BibliaResponse } from './interfaces/biblia.interface';

@Injectable()
export class BibliasService implements OnModuleInit {
  private redisClient: RedisClientType;

  async onModuleInit() {
    this.redisClient = createClient({
      url: 'redis://127.0.0.1:6379',
    });

    await this.redisClient.connect();
    console.log('Redis client connected');
  }

  create(createBibliaDto: CreateBibliaDto) {
    return 'This action adds a new biblia';
  }

  findAll() {
    return `This action returns all biblias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblia`;
  }

  update(id: number, updateBibliaDto: UpdateBibliaDto) {
    return `This action updates a #${id} biblia`;
  }

  remove(id: number) {
    return `This action removes a #${id} biblia`;
  }

  public async getAllBiblias(): Promise<BibliaResponse> {
    try {
      const cached = await this.redisClient.get('biblias');

      if (cached) {
        console.log('Returning data from cache');
        return JSON.parse(cached) as BibliaResponse;
      }

      const { data } = await axios.get<BibliaResponse>(
        'https://api-adventista-default-rtdb.firebaseio.com/biblias.json',
      );

      await this.redisClient.set('biblias', JSON.stringify(data));

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getBibliaByVersion(version: string): Promise<Biblia> {
    try {
      const cacheKey = `biblias/${version}`;
      const cached = await this.redisClient.get(cacheKey);
      if (cached) {
        console.log('Returning data from cache (biblia by version)');
        return JSON.parse(cached) as Biblia;
      }

      const { data } = await axios.get<Biblia>(
        `https://api-adventista-default-rtdb.firebaseio.com/biblias/${version}.json`,
      );

      await this.redisClient.set(cacheKey, JSON.stringify(data));

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getTestament(
    version: string,
    testament: string,
  ): Promise<Biblia> {
    try {
      const cached = await this.redisClient.get(`${version}/${testament}`);
      if (cached) {
        console.log('Returning data from cache (testament)');
        return JSON.parse(cached) as Biblia;
      }

      const { data } = await axios.get<Biblia>(
        `https://api-adventista-default-rtdb.firebaseio.com/biblias/${version}/${testament}.json`,
      );

      await this.redisClient.set(
        `${version}/${testament}`,
        JSON.stringify(data),
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getBook(
    version: string,
    testament: string,
    book: string,
  ): Promise<Biblia> {
    try {
      const cached = await this.redisClient.get(
        `${version}/${testament}/${book}`,
      );
      if (cached) {
        console.log('Returning data from cache (book)');
        return JSON.parse(cached) as Biblia;
      }

      const { data } = await axios.get<Biblia>(
        `https://api-adventista-default-rtdb.firebaseio.com/biblias/${version}/${testament}/${book}.json`,
      );

      await this.redisClient.set(
        `${version}/${testament}/${book}`,
        JSON.stringify(data),
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getChapter(
    version: string,
    testament: string,
    book: string,
    chapter: string,
  ): Promise<Biblia> {
    try {
      const cached = await this.redisClient.get(
        `${version}/${testament}/${book}/${chapter}`,
      );
      if (cached) {
        console.log('Returning data from cache (chapter)');
        return JSON.parse(cached) as Biblia;
      }

      const { data } = await axios.get<Biblia>(
        `https://api-adventista-default-rtdb.firebaseio.com/biblias/${version}/${testament}/${book}/${chapter}.json`,
      );

      await this.redisClient.set(
        `${version}/${testament}/${book}/${chapter}`,
        JSON.stringify(data),
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async getVerse(
    version: string,
    testament: string,
    book: string,
    chapter: string,
    verse: string,
  ): Promise<Biblia> {
    try {
      const cached = await this.redisClient.get(
        `${version}/${testament}/${book}/${chapter}/${verse}`,
      );
      if (cached) {
        console.log('Returning data from cache (verse)');
        return JSON.parse(cached) as Biblia;
      }

      const { data } = await axios.get<Biblia>(
        `https://api-adventista-default-rtdb.firebaseio.com/biblias/${version}/${testament}/${book}/${chapter}/${verse}.json`,
      );

      await this.redisClient.set(
        `${version}/${testament}/${book}/${chapter}/${verse}`,
        JSON.stringify(data),
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }
}
