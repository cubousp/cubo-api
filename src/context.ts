import { DbStoryRepository } from './database/db-story-repository'
import { IStoryRepository } from './repositories/i-story-repository'

export interface IContext {
    storyRepository: IStoryRepository
}

export class Context implements IContext {
    public storyRepository = new DbStoryRepository()
}
