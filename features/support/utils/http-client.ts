import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'


class Request {
    public payload: any
    public token?: string

    setPayload(payload: any) {
        this.payload = payload
    }

    sign(token: string) {
        this.token = token
    }
}

class HttpClient {

    private client = new ApolloClient({
        link: new HttpLink({
            uri: `http://localhost:${process.env.PORT}`,
            fetch: fetch as any
        }),
        cache: new InMemoryCache()
    })

    private response: any

    async send(request: Request) {
        this.response = this.isMutation(request.payload)
                        ? await this.client.mutate({
                            mutation: request.payload
                        })
                        : await this.client.query({
                            query: request.payload
                        })
    }

    createRequest() {
        return new Request()
    }

    getResponse() {
        return this.response
    }

    private isMutation(payload: any) {
        return payload.definitions[0].operation === 'mutation'
    }
}

export const client = new HttpClient()