import { GraphQLDateTime } from 'graphql-iso-date'
import activityResolvers from './activity'
import authResolvers from './auth'
import feedResolvers from './feed'
import inscriptionResolvers from './inscription'
import mailResolvers from './mail'
import participantResolvers from './participant'

export const resolvers = {
    DateTime: GraphQLDateTime,
    Mutation: {
        ...feedResolvers.mutation,
        ...mailResolvers.mutation,
        ...activityResolvers.mutation,
        ...participantResolvers.mutation,
        ...inscriptionResolvers.mutation,
    },
    Query: {
        ...feedResolvers.query,
        ...authResolvers.query,
        ...activityResolvers.query,
        ...participantResolvers.query,
    },
} as any
