import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const body: IBoard = await readBody(event);
  const prisma = new PrismaClient();
  try {
    await prisma.board.create({
      data: {
        title: body.title,
        name: body.name,
        date: body.date,
        tag: body.tag,
        content: body.content,
        create_at: new Date(),
        update_at: new Date(),
      },
    });
    return "작성하신 글이 등록되었습니다.";
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage:
        "서버에 장애가 발생하였습니다. 잠시후 다시 시도해주시기 바랍니다.",
    });
  }
});
