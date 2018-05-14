import { DbStoryRepository } from '../database/db-story-repository'

export class Context {
    storyRepository = new DbStoryRepository()
}