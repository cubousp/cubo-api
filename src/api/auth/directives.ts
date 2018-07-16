import { Context } from '../../context'
import { TransparentError } from '../utils/error'

export const directives = {
    async isAuthenticated(next, source, {role}: any, context: Context) {
        if (!context.currentUser) {
            throw new TransparentError(
                'Must authenticate', 'NotAuthenticated',
            )
        }
        return next()
    },
    async hasRole(next, source, {role}: any, context: Context) {
        if (!context.currentUser) {
            throw new TransparentError(
                'Must authenticate', 'NotAuthenticated',
            )
        }
        if (context.currentUser.role !== role) {
            throw new TransparentError(
                'You don\'t have permissions', 'Unauthorized',
            )
        }
        return next()
    },
}
