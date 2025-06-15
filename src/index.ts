import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "UserAdmin",
      email: "admin@gmail.com",
      password: "admin`",
    },
  });
  console.log("User created.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
