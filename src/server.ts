import fastify, { FastifyInstance } from 'fastify';
import { homeRoute } from './routes/homeRoute';

const app: FastifyInstance = fastify();

app.register(homeRoute);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    // If there's an error starting the server, log the error and exit the process
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
