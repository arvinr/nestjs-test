import { Artist } from '@prisma/client';

export class ArtistEntity implements Artist {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
