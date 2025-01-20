import { Controller, Get, Param } from '@nestjs/common';
import { BibliasService } from './biblias.service';
import { Biblia, BibliaResponse } from './interfaces';

@Controller('biblias')
export class BibliasController {
  constructor(private readonly bibliasService: BibliasService) {}

  @Get()
  async getAllBiblias(): Promise<BibliaResponse> {
    return this.bibliasService.getAllBiblias();
  }

  @Get(':version')
  async getBibliaByVersion(@Param('version') version: string): Promise<Biblia> {
    return this.bibliasService.getBibliaByVersion(version);
  }

  @Get(':version/:testament')
  async getTestament(
    @Param('version') version: string,
    @Param('testament') testament: string,
  ): Promise<Biblia> {
    return this.bibliasService.getTestament(version, testament);
  }

  @Get(':version/:testament/:book')
  async getBook(
    @Param('version') version: string,
    @Param('testament') testament: string,
    @Param('book') book: string,
  ): Promise<Biblia> {
    return this.bibliasService.getBook(version, testament, book);
  }

  @Get(':version/:testament/:book/:chapter')
  async getChapter(
    @Param('version') version: string,
    @Param('testament') testament: string,
    @Param('book') book: string,
    @Param('chapter') chapter: string,
  ): Promise<Biblia> {
    return this.bibliasService.getChapter(version, testament, book, chapter);
  }

  @Get(':version/:testament/:book/:chapter/:verse')
  async getVerse(
    @Param('version') version: string,
    @Param('testament') testament: string,
    @Param('book') book: string,
    @Param('chapter') chapter: string,
    @Param('verse') verse: string,
  ): Promise<Biblia> {
    return this.bibliasService.getVerse(
      version,
      testament,
      book,
      chapter,
      verse,
    );
  }
}
