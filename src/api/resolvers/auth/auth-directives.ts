import { AuthRole } from '../../../auth/auth-service'
import { Context } from '../../../context'

export const authDirectives = {
    async isAuthenticated(next, source, {role}: any, context: Context) {
        await context.authService.getUserInfo(context.token)
        return next()
    },
    async hasRole(next, source, {role}: any, context: Context) {
        const userInfo = await context.authService.getUserInfo(context.token)
        context.authService.validateRole(AuthRole.ADMIN, userInfo)
        return next()
    },
}
