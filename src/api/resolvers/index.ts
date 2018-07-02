import { GraphQLDateTime } from 'graphql-iso-date'
import authResolvers from './auth'
import feedResolvers from './feed'
import mailResolvers from './mail'

export const resolvers = {
    DateTime: GraphQLDateTime,
    Mutation: {
        ...feedResolvers.mutation,
        ...mailResolvers.mutation,
    },
    Query: {
        ...feedResolvers.query,
        ...authResolvers.query,
    },
} as any
