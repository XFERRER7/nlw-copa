import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@gmail.com',
      
    }
  })


}

main();