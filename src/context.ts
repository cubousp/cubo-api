import { DbStoryRepository } from './database/db-story-repository'
import { IStoryRepository } from './repositories/i-story-repository'
import { AuthService } from './auth/auth-service'

export interface IContext {
    storyRepository: IStoryRepository
    authService: AuthService
}

export class Context implements IContext {
    public storyRepository = new DbStoryRepository()
    public authService = new AuthService()
}
