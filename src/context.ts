import { AuthService } from './auth/auth-service'
import { Activity } from './database/activity'
import { Participant } from './database/participant'
import { Story } from './database/story'
import { MailService } from './mail/mail-service'

export class Context {
    public story = new Story()
    public activity = new Activity()
    public participant = new Participant()
    public authService = new AuthService()
    public mailService = new MailService()
    public token

    constructor(token?: string) {
        this.token = token
    }
}
