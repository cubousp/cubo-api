import { Given, Then, When } from 'cucumber'
import * as expect from 'expect'
import gql from 'graphql-tag'
import { Story } from '../../../src/repositories/i-story-repository'
import { getAdminToken } from '../../../test-utils/auth'
import { commonQueries } from '../../../test-utils/database'
import { client } from '../../../test-utils/http-client'

const request = client.createRequest()
let story: Story

Given('that the feed contains 1 story to be deleted', async () => {
    story = await commonQueries.createStory('A story')
})

// And

Given('a request authenticated as admin to delete the story', () => {
    const token = getAdminToken()
    const payload = gql`
        mutation DeleteStory {
            deleteStory(id: "${story.id}")
        }
    `
    request.sign(token)
    request.setPayload(payload)
})

When('the api receives the delete story request', async () => {
    await client.send(request)
})

Then('it should delete the story with success', () => {
    const { data } = client.getResponse()
    expect(data.deleteStory).toEqual('Story deleted with success')
})
