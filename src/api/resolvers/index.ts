import { GraphQLDateTime } from 'graphql-iso-date'
import authResolvers from './auth'
import feedResolvers from './feed'

export const resolvers = {
    DateTime: GraphQLDateTime,
    Mutation: {
        ...feedResolvers.mutation,
    },
    Query: {
        ...feedResolvers.query,
        ...authResolvers.query,
    },
} as any
