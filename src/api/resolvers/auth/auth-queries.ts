import { IContext } from '../../../context'

export const authQueries = {

    async signIn(_, { email, password }, context: IContext) {
        return context.authService.signIn(email, password)
    },

    async signInAsAdmin(_, { email, password }, context: IContext) {
        return context.authService.signInAsAdmin(email, password)
    },
}
