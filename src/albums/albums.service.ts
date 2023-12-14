import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumEntity } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}

  create(createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    return this.prisma.album.create({
      data: {
        name: createAlbumDto.name,
        artist: { connect: { id: createAlbumDto.artistId } },
      },
    });
  }

  findAll(artistId: number): Promise<AlbumEntity[]> {
    return this.prisma.album.findMany({ where: { artistId } });
  }

  find(id: number): Promise<AlbumEntity> {
    return this.prisma.album.findUnique({ where: { id } });
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<AlbumEntity> {
    return this.prisma.album.update({
      where: { id },
      data: updateAlbumDto,
    });
  }

  remove(id: number): Promise<AlbumEntity> {
    return this.prisma.album.delete({
      where: { id },
    });
  }
}
