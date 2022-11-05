import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data: {
      name: 'Ale',
      email: 'ale@gmail.com',
      avatarUrl: 'https://github.com/ale.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      code: 'Bolão do Ale',
      ownerId: user.id,
      title: 'Pool 1',
      participants: {
        create: {
          userId: user.id,
        }
      }
    }
  })


  await prisma.game.create({
    data: {
      date: '2022-11-02T12:28:46.126Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR', 
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T10:08:46.126Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })

}

main();