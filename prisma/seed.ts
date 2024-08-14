 import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.$executeRaw`
        INSERT INTO products (date, name, city, type, description)
        SELECT timestamp '2024-01-10 20:00:00' +
               random() * (timestamp '2024-01-20 20:00:00' -
                           timestamp '2024-01-10 10:00:00') AS date,
               ('{FlyDubai,Eurowings,Lot}'::text[])[ceil(random()*3)]  AS name,            
               ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city,
               'flight' AS type,
               'flight description' as description
        FROM generate_series(1, 15);
    `;
    await prisma.$executeRaw`
        INSERT INTO products (date, city, name, type, description)
            SELECT timestamp '2024-01-10 20:00:00' +
               random() * (timestamp '2024-01-20 20:00:00' -
                           timestamp '2024-01-10 10:00:00') AS date,
               ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city,
               ('{Hilton,Mercury,Radisson, Holiday Inn}'::text[])[ceil(random()*3)]  AS name,
              'hotel' AS type,
              'hotel description' as description
        FROM generate_series(1, 15);
    `;

    await prisma.$executeRaw`
        INSERT INTO products (date, city, name, type, description)
        SELECT timestamp '2024-01-10 20:00:00' +
               random() * (timestamp '2024-01-20 20:00:00' -
                           timestamp '2024-01-10 10:00:00') AS date,
               ('{Minsk,Mallorca,Bar}'::text[])[ceil(random()*3)]  AS city,
               ('{Kayak,Blabla,Sixt, Europcar}'::text[])[ceil(random()*3)]  AS name,
        'car_rentals' AS type,
        'car rentals description' as description
        FROM generate_series(1, 15);
    `;

    await prisma.$executeRaw`
        INSERT INTO product_bundle (productids)
        VALUES ('{1, 37, 51}'::int[])
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
