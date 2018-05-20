import { DbStoryRepository } from './database/db-story-repository'

export class Context {
    public storyRepository = new DbStoryRepository()
}
