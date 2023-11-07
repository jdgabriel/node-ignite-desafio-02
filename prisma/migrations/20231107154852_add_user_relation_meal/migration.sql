-- CreateTable
CREATE TABLE "meal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "in_diet" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "meal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
