import { GraphQLError } from 'graphql'
import { isTransparent } from './resolvers/error'

export const formatError = (error: GraphQLError) => {
    return {
        ...error,
        code: isTransparent(error.originalError) ?
            error.originalError.code :
            'InternalServerError',
        message: isTransparent(error.originalError) ?
            error.originalError.message :
            'An error occurred',
    }
}
