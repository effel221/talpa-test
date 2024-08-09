import type { Resolvers } from '#graphql/resolver'
import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"

const resolvers: Resolvers = {
    Query: {
        books: () => {
            return [
                {
                    title: 'Tanja loves Toms',
                    author: {
                        name: 'Tanja loves Toms 2'
                    }
                },
            ]
        },
    },
}

const apollo = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateH3Handler(apollo)
