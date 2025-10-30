import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminPass = await bcrypt.hash('1234', 10);
  const userPass = await bcrypt.hash('1234', 10);

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { password: adminPass, role: 'admin' },
    create: { email: 'admin@example.com', password: adminPass, role: 'admin' },
  });

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: { password: userPass, role: 'user' },
    create: { email: 'user@example.com', password: userPass, role: 'user' },
  });
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
