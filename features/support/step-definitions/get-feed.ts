import { Given, Then, When } from 'cucumber'
import { client } from '../utils/http-client'
import { client as db } from '../../../src/infrastructure/database/client'
import gql from 'graphql-tag'

const request = client.createRequest()
const createStory = (message: string) => db.mutation.createStory({ data: { message } })

Given('there are three stories on the feed', async() => {
    await createStory('Story 1')
    await createStory('Story 2')
    await createStory('Story 3')
})
// And
Given('a request to get the feed', () => {
    const payload = gql`
        query Feed {
            feed {
                id
                message
            }
        }
    `
    request.setPayload(payload)
})

When('the api receives the request to get the feed', async() => {
    await client.send(request)
})

Then('the api returns the latest stories with success', () => {
    const { data } = client.getResponse()
    const expected = [{
        id: expect.any(String),
        message: 'Story 3'
    }, {
        id: expect.any(String),
        message: 'Story 2'
    }, {
        id: expect.any(String),
        message: 'Story 1'
    }]
    data.forEach( (story, index) => expect(story).toMatchObject(expected[index])) // note that the order matters
})