import { Album } from '@prisma/client';

export class AlbumEntity implements Album {
  id: number;
  name: string;
  artistId: number;
  createdAt: Date;
  updatedAt: Date;
}
