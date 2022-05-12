import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// A `main` function so that you can use async/await
export async function main() {
  const allMessages = await prisma.message.findMany({
    select: {
      message: true,
    }
  })
  console.dir(allMessages)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })