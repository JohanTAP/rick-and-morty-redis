import { Module } from '@nestjs/common';
import { BibliasService } from './biblias.service';
import { BibliasController } from './biblias.controller';

@Module({
  controllers: [BibliasController],
  providers: [BibliasService],
})
export class BibliasModule {}
