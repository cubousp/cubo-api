import { AuthRole } from '../../../auth/auth-service'
import { IContext } from '../../../context'

export const authDirectives = {
    async isAuthenticated(next, source, {role}: any, context: IContext) {
        await context.authService.getUserInfo(context.token)
        return next()
    },
    async hasRole(next, source, {role}: any, context: IContext) {
        const userInfo = await context.authService.getUserInfo(context.token)
        context.authService.validateRole(AuthRole.ADMIN, userInfo)
        return next()
    },
}
