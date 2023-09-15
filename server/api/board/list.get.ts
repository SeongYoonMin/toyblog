import { PrismaClient } from "@prisma/client";

export default defineEventHandler((event) => {
  const prisma = new PrismaClient();
  try {
    const list = prisma.board.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return list;
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage:
        "서버에 장애가 발생하였습니다. 잠시후 다시 시도해주시기 바랍니다.",
    });
  }
});
