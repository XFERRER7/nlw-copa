import Fastify from 'fastify'
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client'
import {z} from 'zod'
import ShortUniqueId, { ShortUniqueIdOptions } from 'short-unique-id'

const prisma = new PrismaClient({
  log: ['query']
})


async function bootstrap() {
  
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get('/pools/count', async () => {

    const pools = await prisma.pool.count();

    return { pools };
  })





  fastify.post('/pools', (response, reply) => {

    const createPoolBody = z.object({
      title: z.string(),
    })

    const code = new ShortUniqueId({length: 6}).

    const { title } = createPoolBody.parse(response.body);

    return reply.status(201).send({});

  })



  await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ });

}

bootstrap();