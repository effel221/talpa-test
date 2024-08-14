import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";
import type {ProductsQueryInterface} from "~/types_interfaces/interfaces";




const resolvers = {
    Query: {
        products: async (parent: undefined, args:ProductsQueryInterface) => {
            const result = await prisma.products.findMany({
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
    Mutation: {
        delete_product: async (parent, args) => {
            const id = args.id
            const deleteProduct = await prisma.products.delete({
                where: {
                    id: Number(args.id),
                },
            })
            return deleteProduct
        }
    }
}

const apollo = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateH3Handler(apollo)
