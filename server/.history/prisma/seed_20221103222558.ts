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
      ownerId: user.
    }
  })

}

main();