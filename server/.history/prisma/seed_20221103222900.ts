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


  const game = await prisma.game.create({
    data: {
      date: '2022-11-04T01:28:46.126Z',
      
    }
  })

}

main();