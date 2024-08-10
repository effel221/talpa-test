import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.$executeRaw`
        INSERT INTO flight (date, city)
        SELECT timestamp '2024-01-10 20:00:00' +
               random() * (timestamp '2024-01-20 20:00:00' -
                           timestamp '2024-01-10 10:00:00'),
               ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city
        FROM generate_series(1, 15);
    `;

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
