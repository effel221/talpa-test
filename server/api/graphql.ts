import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";
import type {ProductsQueryInterface, IdParamMutationInteface} from "~/types_interfaces/interfaces";




const resolvers = {
    Query: {
        get_card: async (parent: undefined, args) => {
            const filterCondition = () => {
                if (args.filter.id) return {id: args.filter.id}
                if (args.filter.user) return {id: args.filter.user}
            }
            const currentCard = await prisma.card.findMany({
                where: filterCondition()
            })
            return currentCard
        },
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
        add_to_card: async (parent: undefined, args) => {
            const products = args.card.products
            const currentCard = await prisma.card.findMany({
                where: {
                    user: args.card.user
                }
            })
            if (!currentCard.length) {
                const addToCard = await prisma.card.create({
                    data: {
                        user: args.card.user,
                        card_products: {
                            create: products.map(({id})=>
                                ({productId: Number(id)})),
                        },
                    },
                })
                return addToCard
            } else {
                const updateToCard = await prisma.card.update({
                    where: {
                      id: currentCard[0].id
                    },
                    data: {
                        user: args.card.user,
                        card_products: {
                            create: products.map(({id})=>
                                ({productId: Number(id)})),
                        },
                    },
                })
                return updateToCard
            }
        },
        create_product: async (parent: undefined, args) => {

        },
        create_bundle_product: async (parent: undefined, args) => {

        },
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
