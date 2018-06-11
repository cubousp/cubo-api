import { AuthService } from './auth/auth-service'
import { DbStoryRepository } from './database/db-story-repository'
import { IStoryRepository } from './repositories/i-story-repository'

export interface IContext {
    storyRepository: IStoryRepository
    authService: AuthService,
    token?: string
}

export class Context implements IContext {
    public storyRepository = new DbStoryRepository()
    public authService = new AuthService()
    public token

    constructor(token?: string) {
        this.token = token
    }
}
