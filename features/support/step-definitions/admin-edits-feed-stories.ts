import { Given, Then, When } from 'cucumber'
import gql from 'graphql-tag'
import { getAdminToken } from '../../../test-utils/auth'
import { commonQueries } from '../../../test-utils/database'
import { client } from '../../../test-utils/http-client'

const request = client.createRequest()
let story

Given('that the feed contains 1 story', async () => {
    story = await commonQueries.createStory('My brand new story')
})

// And

Given('a request authenticated as admin to edit the story', () => {
    const token = getAdminToken()
    console.log('story id', story.id)
    const payload = gql`
        mutation UpdateStory {
            updateStory(id: "${story.id}", input: {
                message: "Updated story"
            }) {
                message
            }
        }
    `
    request.sign(token)
    request.setPayload(payload)
})

When('the api receives that request', async () => {
    await client.send(request)
})

Then('it should update the story with success', () => {
    const { data } = client.getResponse()
    const expectedPayload = {
        message: 'My brand new updated story',
    }
    expect(data.updateStory).toEqual(expectedPayload)
})
