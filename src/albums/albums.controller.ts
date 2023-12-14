import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumEntity } from './entities/album.entity';

@Controller()
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    return this.albumsService.create(createAlbumDto);
  }

  @Get()
  findAll(@Param('artistId') id: string): Promise<AlbumEntity[]> {
    return this.albumsService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AlbumEntity> {
    return this.albumsService.find(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ): Promise<AlbumEntity> {
    return this.albumsService.update(+id, updateAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AlbumEntity> {
    return this.albumsService.remove(+id);
  }
}
