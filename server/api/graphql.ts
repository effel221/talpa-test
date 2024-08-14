import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";
import type {ProductsQueryInterface} from "~/types_interfaces/interfaces";




const resolvers = {
    Query: {
        products: (parent: undefined, args:ProductsQueryInterface) => {
            const result = prisma.products.findMany({
                    where: {
                        type: {
                            in: args.filter
                        }
                    },
                    orderBy: [
                    {
                        date: 'desc',
                    }
                ],
            })
            return result
        },
        bundle_products: async () => {
            const bundles = await prisma.product_bundle.findMany({})
                const result = bundles.map(item=> {
                    const products = prisma.products.findMany({
                        where: {
                            id: {
                                in: item.productids
                            }
                        }
                    })
                    return {...item, products}
                })
            return result
        }
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
