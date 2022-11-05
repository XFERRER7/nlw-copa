import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query']
})

async function bootstrap() {

  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/pools/count', () => {

    const query = prisma.pool.findMany({
      where: {
        title: {
          
        }
      }
    })

    return { count: 13443235 };
  })

  await fastify.listen({ port: 3333 });

}

bootstrap();