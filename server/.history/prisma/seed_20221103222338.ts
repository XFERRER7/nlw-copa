import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data: {
      name: 'Ale',
      email: 'alice@gmail.com',
      avatarUrl: ''
    }
  })


}

main();