import { typeDefs } from '#graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import prisma from "~/server/prisma";
import type {ProductsQueryType, IdParamMutationType, GetCardType, CardArgsType} from "~/types_interfaces/types";


const resolvers = {
    Query: {
        get_card: async (parent: undefined, args: GetCardType) => {
            const filterCondition = () => {
                if (args.filter.id) return {id: Number(args.filter.id)}
                if (args.filter.user) return {user: args.filter.user}
            }

            const currentCard = await prisma.card.findMany({
                where: filterCondition(),
                include: {
                    products: true
                },
            })
            const productCount = currentCard[0]?.products.length
            return [{...currentCard[0], productCount}]
        },
        products: async (parent: undefined, args:ProductsQueryType) => {
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
        add_to_card: async (parent: undefined, args: CardArgsType) => {
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
                        products: {
                            connect: products.map(({id})=>
                                ({id: Number(id)}))
                        }
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
                        products: {
                            connect: products.map(({id})=>
                                ({id: Number(id)}))
                        }
                    },
                })
                return updateToCard
            }
        },
        create_product: async () => {

        },
        create_bundle_product: async () => {

        },
        delete_product: async (parent: undefined, args: IdParamMutationType) => {
            const id = Number(args.id)
            const currenProduct = await prisma.products.findMany({
                where: {id: id}
            })
            if (currenProduct[0]?.cardId) {
                const updateToCard = await prisma.card.update({
                    where: {
                        id: currenProduct[0].cardId
                    },
                    data: {
                        products: {
                            disconnect: [{id: id}]
                        }
                    },
                })
            }
            const deleteProduct = await prisma.products.delete({
                where: {
                    id: Number(args.id),
                },
            })
            return deleteProduct
        },
        delete_bundle_product: async (parent: undefined, args : IdParamMutationType) => {
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
