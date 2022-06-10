import { PrismaClient } from '@prisma/client';
import { routes } from './routes';

export const prisma = new PrismaClient({
  log: [
    { emit: 'stdout', level: 'query' }
  ]
});

async function main() {
  const result = await prisma.feedback.findMany()
  routes.get('/table', (req, res) => {
    res.send(result);
  });
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })