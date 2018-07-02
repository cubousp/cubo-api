import { AuthService } from './auth/auth-service'
import { DbStoryRepository } from './database/db-story-repository'
import { MailService } from './mail/mail-service'
import { IStoryRepository } from './repositories/i-story-repository'

export interface IContext {
    storyRepository: IStoryRepository
    authService: AuthService,
    mailService: MailService,
    token?: string
}

export class Context implements IContext {
    public storyRepository = new DbStoryRepository()
    public authService = new AuthService()
    public mailService = new MailService()
    public token

    constructor(token?: string) {
        this.token = token
    }
}
