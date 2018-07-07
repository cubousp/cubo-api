import { GraphQLDateTime } from 'graphql-iso-date'
import activityResolvers from './activity'
import authResolvers from './auth'
import feedResolvers from './feed'
import mailResolvers from './mail'

export const resolvers = {
    DateTime: GraphQLDateTime,
    Mutation: {
        ...feedResolvers.mutation,
        ...mailResolvers.mutation,
        ...activityResolvers.mutation,
    },
    Query: {
        ...feedResolvers.query,
        ...authResolvers.query,
        ...activityResolvers.query,
    },
} as any
