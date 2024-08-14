import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";
import type {ProductsQueryInterface, IdParamMutationInteface} from "~/types_interfaces/interfaces";

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
            const bundles = await prisma.bundle.findMany({
                include: {
                    bundle_products: {
                        include: {
                            product: true
                        }
                    }
                }
            })
            console.log(JSON.stringify(bundles, null, 2))
            return bundles
        }
    },
    Mutation: {
        delete_product: async (parent: undefined, args: IdParamMutationInteface) => {
            const id = args.id
            const deleteProduct = await prisma.products.delete({
                where: {
                    id: Number(args.id),
                },
            })
            return deleteProduct
        },
        delete_bundle_product: async (parent: undefined, args : IdParamMutationInteface) => {
            const id = args.id
            const deleteBundleProduct = await prisma.product_bundle.delete({
                where: {
                    id: Number(args.id),
                },
            })
            return deleteBundleProduct
        },
    }
}

const apollo = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateH3Handler(apollo)
