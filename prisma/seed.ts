import { PrismaClient } from "@prisma/client";
import { CreateUserInput } from "../../interfaces/user";
import users from "./seed-data/users";

const prisma = new PrismaClient();

const createUser = async (user: CreateUserInput) => {
  await prisma.user.create({
    data: user,
  });
};

const main = async () => {
  await Promise.all(
    users.map(async (user) => {
      await createUser(user);
    })
  );
};

console.log("Runnig seed!");
main()
  .then(() => console.log("process finished with success"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
