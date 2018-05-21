import { Given, Then, When } from 'cucumber'
import * as expect from 'expect'
import gql from 'graphql-tag'
import { getAdminToken } from '../../../test-utils/auth'
import { client } from '../../../test-utils/http-client'

const request = client.createRequest()

Given('a request to post to feed authenticated with admin role and correct payload', () => {
    const payload = gql`
        mutation PostToFeed {
            postToFeed(input: {
                message: "My brand new story"
            }) {
                id
                message
            }
        }
    `
    const token = getAdminToken()

    request.setPayload(payload)
    request.sign(token)
})

When('the api receives the request to post to feed', async () => {
    await client.send(request)
})

Then('the api returns a success response with the created story', () => {
    const { data } = client.getResponse()
    const expectedPayload = {
        id: expect.any(String),
        message: 'My brand new story',
    }
    expect(data.postToFeed).toMatchObject(expectedPayload)
})
