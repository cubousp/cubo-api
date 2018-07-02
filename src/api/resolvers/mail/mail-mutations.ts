import { IContext } from '../../../context'
import { emailTemplate } from './email-template'

export const mailMutations = {

    async sendEmailToStaff(_, { input }, context: IContext) {
        const { name, email, phone, message } = input
        context.mailService.send(emailTemplate(name, email, phone, message))
        return 'Success'
    },
}
