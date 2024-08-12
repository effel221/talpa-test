 import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.$executeRaw`
        INSERT INTO flights (date, city)
        SELECT timestamp '2024-01-10 20:00:00' +
               random() * (timestamp '2024-01-20 20:00:00' -
                           timestamp '2024-01-10 10:00:00') AS date,
               ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city
        FROM generate_series(1, 15);
    `;
    await prisma.$executeRaw`
        INSERT INTO hotels (city, name)
        SELECT ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city,
               ('{Hilton,Mercury,Radisson, Holiday Inn}'::text[])[ceil(random()*3)]  AS name
        FROM generate_series(1, 15);
    `;

    await prisma.$executeRaw`
        INSERT INTO car_rentals (city, company_name)
        SELECT ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city,
               ('{Kayak,Blabla,Sixt, Europcar}'::text[])[ceil(random()*3)]  AS company_name
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
