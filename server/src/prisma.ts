import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
import { routes } from './routes';

export const prisma = new PrismaClient({
  log: [
    { emit: 'stdout', level: 'query' }
  ]
});

async function main() {
  const allFeedbacks = await prisma.feedback.findMany()
  routes.get('/feedbacks', (req, res) => {
    res.send(allFeedbacks);
  });
}
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })