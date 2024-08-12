import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";




const resolvers = {
    Query: {
        flights: () => {
            const result = prisma.flights.findMany()
            return result
        },
        hotels: () => {
            const result = prisma.hotels.findMany()
            return result
        },
        car_rentals: async () => {
            const result = await prisma.car_rentals.findMany()
        },
    },
/*    Mutation: {
        // 2
        post: (parent, args) => {

            const book = {
                title: args.title
            }
            books.unshift(book)
            return books
        }
    }*/
}

const apollo = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateH3Handler(apollo)
