import { Given, Then, When } from 'cucumber'
import * as expect from 'expect'
import gql from 'graphql-tag'
import { commonQueries } from '../../../test-utils/database'
import { client } from '../../../test-utils/http-client'

const request = client.createRequest()
const createStory = commonQueries.createStory

Given('there are three stories on the feed', async () => {
    await createStory('Story 1')
    await createStory('Story 2')
    await createStory('Story 3')
})
// And
Given('a request to get the feed', () => {
    const payload = gql`
        query Feed {
            feed {
                hasMore
                last
                stories {
                    id
                    message
                    createdAt
                }
            }
        }
    `
    request.setPayload(payload)
})

When('the api receives the request to get the feed', async () => {
    await client.send(request)
})

Then('the api returns the latest stories with success', () => {
    const { data } = client.getResponse()
    const expected = [{
        createdAt: expect.any(String),
        id: expect.any(String),
        message: 'Story 3',
    }, {
        createdAt: expect.any(String),
        id: expect.any(String),
        message: 'Story 2',
    }, {
        createdAt: expect.any(String),
        id: expect.any(String),
        message: 'Story 1',
    }]
    expect(data.feed.hasMore).toBe(false)
    data.feed.stories.forEach( (story, index) => expect(story).toMatchObject(expected[index]))
})
