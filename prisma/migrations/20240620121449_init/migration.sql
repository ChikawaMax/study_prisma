-- CreateTable
CREATE TABLE "Todo2" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo2_pkey" PRIMARY KEY ("id")
);