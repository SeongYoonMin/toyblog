import { PrismaClient } from "@prisma/client";

export default defineEventHandler((event) => {
  const prisma = new PrismaClient();
  const list = prisma.board.findMany();
  return list;
});
