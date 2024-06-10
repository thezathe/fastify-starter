import { FastifyInstance } from 'fastify';
import { homeHandler } from '../controllers/homeController';

export const homeRoute = async (app: FastifyInstance) => {
  app.get('/', homeHandler);
};
