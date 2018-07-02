/* tslint:disable no-var-requires */
const sgMail = require('@sendgrid/mail')

interface IEmailOptions {
    from: string,
    to: string,
    html: string,
    subject: string,
    text: string,
}

export class MailService {
    public send({ from, html, subject, text, to }: IEmailOptions) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = { from, html, subject, text, to }
        sgMail.send(msg)
    }
}
