// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Ratboys',
    },
  });
  const artist2 = await prisma.artist.create({
    data: {
      name: 'The Lawrence Arms',
    },
  });
  const artist3 = await prisma.artist.create({
    data: {
      name: 'Pkew Pkew Pkew',
    },
  });
  const artist4 = await prisma.artist.create({
    data: {
      name: 'Cloud Nothings',
    },
  });
  const artist5 = await prisma.artist.create({
    data: {
      name: 'PUP',
    },
  });
  const artist6 = await prisma.artist.create({
    data: {
      name: 'Spanish Love Songs',
    },
  });
  const artist7 = await prisma.artist.create({
    data: {
      name: 'The Flatliners',
    },
  });

  const album1 = await prisma.album.create({
    data: {
      name: 'The Window',
      artist: {
        connect: { id: artist1.id },
      },
    },
  });
  const album2 = await prisma.album.create({
    data: {
      name: 'The Greatest Story Ever Told',
      artist: {
        connect: { id: artist2.id },
      },
    },
  });
  const album3 = await prisma.album.create({
    data: {
      name: 'Optimal Lifestyles',
      artist: {
        connect: { id: artist3.id },
      },
    },
  });
  const album4 = await prisma.album.create({
    data: {
      name: 'The Shadow I Remember',
      artist: {
        connect: { id: artist4.id },
      },
    },
  });
  const album5 = await prisma.album.create({
    data: {
      name: 'The Dream Is Over',
      artist: {
        connect: { id: artist5.id },
      },
    },
  });
  const album6 = await prisma.album.create({
    data: {
      name: 'No Joy',
      artist: {
        connect: { id: artist6.id },
      },
    },
  });
  const album7 = await prisma.album.create({
    data: {
      name: 'New Ruin',
      artist: {
        connect: { id: artist7.id },
      },
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
