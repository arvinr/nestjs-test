import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistEntity } from './entities/artist.entity';

@Controller()
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll(): Promise<ArtistEntity[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ArtistEntity> {
    return this.artistsService.find(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<ArtistEntity> {
    return this.artistsService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ArtistEntity> {
    return this.artistsService.remove(+id);
  }
}
