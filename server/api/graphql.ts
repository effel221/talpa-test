import type { Resolvers } from '#graphql/resolver'
import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";


let books = []
const resolvers: Resolvers = {
    Query: {
        products: () => {
            const result = prisma.flights.findMany()
            return result
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
