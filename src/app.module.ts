import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';

@Module({
  imports: [RickAndMortyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
