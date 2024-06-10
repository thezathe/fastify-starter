import fastify, { FastifyInstance } from 'fastify';
const app: FastifyInstance = fastify();

app.get('/', async function handler(request, reply) {
  return { hello: 'world' };
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    // If there's an error starting the server, log the error and exit the process
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
