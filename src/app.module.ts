import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';
import { BibliasModule } from './biblias/biblias.module';

@Module({
  imports: [RickAndMortyModule, BibliasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
