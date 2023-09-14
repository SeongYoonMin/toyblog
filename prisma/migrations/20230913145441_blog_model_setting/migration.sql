-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "tag" TEXT,
    "content" TEXT NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);
