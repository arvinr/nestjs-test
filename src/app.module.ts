import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { PrismaModule } from './prisma/prisma.module';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    RouterModule.register(routes),
    PrismaModule,
    ArtistsModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
