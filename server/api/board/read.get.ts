import { PrismaClient } from "@prisma/client";
interface IGetQuery {
  id: number;
}
export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const query: IGetQuery = getQuery(event);
  const id = +query.id as number;
  const readItem = await prisma.board.findUnique({
    where: {
      id,
    },
  });
  return readItem;
});
