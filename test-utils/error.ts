import { GraphQLError } from 'graphql'

export const buildGraphQLError = (error: Error): GraphQLError =>
    new GraphQLError(error.message, undefined, undefined , undefined, undefined, error)
