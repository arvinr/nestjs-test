import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArtistEntity } from './entities/artist.entity';

@Injectable()
export class ArtistsService {
  constructor(private prisma: PrismaService) {}

  create(createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
    return this.prisma.artist.create({ data: createArtistDto });
  }

  findAll(): Promise<ArtistEntity[]> {
    return this.prisma.artist.findMany();
  }

  find(id: number): Promise<ArtistEntity> {
    return this.prisma.artist.findUnique({ where: { id } });
  }

  update(id: number, updateArtistDto: UpdateArtistDto): Promise<ArtistEntity> {
    return this.prisma.artist.update({
      where: { id },
      data: updateArtistDto,
    });
  }

  remove(id: number): Promise<ArtistEntity> {
    return this.prisma.artist.delete({
      where: { id },
    });
  }
}
