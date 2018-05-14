import { StoryRepository } from '../repositories/story-repository'

export class PostToFeed {

    constructor(private storyRepository: StoryRepository) { }

    async execute(storyInput) {
        const story = await this.storyRepository.save(storyInput)
        return story
    }
}