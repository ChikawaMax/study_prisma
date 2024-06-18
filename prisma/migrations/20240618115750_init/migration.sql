-- CreateTable
CREATE TABLE "animal_history" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "years" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "animal_history_pkey" PRIMARY KEY ("url","years","id","name","type")
);

-- CreateTable
CREATE TABLE "camp_info" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "camp_name" VARCHAR NOT NULL,
    "reception_time" VARCHAR NOT NULL,
    "price" VARCHAR NOT NULL,
    "address" VARCHAR NOT NULL,
    "spa" VARCHAR NOT NULL,
    "area" VARCHAR NOT NULL,

    CONSTRAINT "camp_info_pkey" PRIMARY KEY ("id","camp_name","reception_time","price","address","spa","area")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
