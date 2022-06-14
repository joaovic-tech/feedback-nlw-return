import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
import { routes } from './routes';

export const prisma = new PrismaClient();