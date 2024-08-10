import type { Resolvers } from '#graphql/resolver'
import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"


let books = []
const resolvers: Resolvers = {
    Query: {
        books: () => {
            console.log(books)
            return books.length ? books : [
                {
                    title: 'Tanja loves Toms title',
                    author: {
                        name: 'Tanja loves Toms 2'
                    }
                },
            ]
        },
    },
    Mutation: {
        // 2
        post: (parent, args) => {

            const book = {
                title: args.title
            }
            books.unshift(book)
            return books
        }
    }
}

const apollo = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateH3Handler(apollo)
