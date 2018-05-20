import { GraphQLDateTime } from 'graphql-iso-date'
import feedResolvers from './feed/index'

export const resolvers = {
    DateTime: GraphQLDateTime,
    Mutation: feedResolvers.mutation,
    Query: feedResolvers.query,
} as any
