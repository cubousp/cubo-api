import { Context } from '../../context'

export const Query = {
    async signIn(_, { email, password }, context: Context) {
        return context.authService.signIn(email, password)
    },
}
