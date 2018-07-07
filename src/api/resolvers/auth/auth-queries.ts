import { Context } from '../../../context'

export const authQueries = {

    async signIn(_, { email, password }, context: Context) {
        return context.authService.signIn(email, password)
    },

    async signInAsAdmin(_, { email, password }, context: Context) {
        return context.authService.signInAsAdmin(email, password)
    },
}
