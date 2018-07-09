import { AuthRole } from '../../auth/auth-service'
import { Context } from '../../context'

export const directives = {
    async isAuthenticated(next, source, {role}: any, context: Context) {
        const currentUser = await context.authService.getUserInfo(context.token)
        context.currentUser = currentUser
        return next()
    },
    async hasRole(next, source, {role}: any, context: Context) {
        const currentUser = await context.authService.getUserInfo(context.token)
        context.authService.validateRole(AuthRole.ADMIN, currentUser)
        context.currentUser = currentUser
        return next()
    },
}
