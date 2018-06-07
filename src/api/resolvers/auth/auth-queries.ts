import { IContext } from '../../../context'

export const authQueries = {

    async signIn(_, { email, password }, context: IContext) {
        const token = await context.authService.signIn(email, password)
        return { token }
    },
}
