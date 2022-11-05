import Fastify from 'fastify'


async function Bootstrap() {

  const fastify = Fastify({
    logger: true,
  });

  await fastify.listen({port: 3333})

}

