import { Context } from '../../context'
import { emailTemplate } from './email-template'

export const Mutation = {

    async sendEmailToStaff(_, { input }, context: Context) {
        const { name, email, phone, message } = input
        context.mailService.send(emailTemplate(name, email, phone, message))
        return 'Success'
    },
}
