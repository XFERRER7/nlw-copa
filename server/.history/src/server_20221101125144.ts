import Fastify from 'fastify'


async function bootstrap() {

  const fastify = Fastify({
    logger: true,
  });

  fastify.get('pools/count', () => {

    const count = 1242434;

    return count;

  })

  await fastify.listen({port: 3333});

}

bootstrap();