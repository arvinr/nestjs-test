import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';

export const routes = [
  {
    path: 'artists',
    module: ArtistsModule,
    children: [
      {
        path: ':artistId/albums',
        module: AlbumsModule,
      },
    ],
  },
];
