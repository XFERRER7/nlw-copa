import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

async function bootstrap() {

  c

  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/pools/count', () => {

    return { count: 13443235 };
  })

  await fastify.listen({ port: 3333 });

}

bootstrap();