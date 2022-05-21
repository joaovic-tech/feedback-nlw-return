import { PrismaClient } from '@prisma/client';
import { routes } from './routes';

export const prisma = new PrismaClient({
  log: [
    { emit: 'stdout', level: 'query' },
    { emit: 'stdout', level: 'info' },
    { emit: 'stdout', level: 'warn' },
    { emit: 'stdout', level: 'error' }
  ]
});

async function main() {
  const result = await prisma.feedback.findMany()
  const routeFeedbackTable = process.env.ROUTER_FEEDBACKS_TABLE!
  routes.get(routeFeedbackTable, (req, res) => {
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