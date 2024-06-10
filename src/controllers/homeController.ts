import { FastifyReply, FastifyRequest } from 'fastify';

export const homeHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  return { hello: 'world' };
};
