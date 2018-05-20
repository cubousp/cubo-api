import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

class Request {
    public payload: any
    public token?: string

    public setPayload(payload: any) {
        this.payload = payload
    }

    public sign(token: string) {
        this.token = token
    }
}

class HttpClient {

    private client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            fetch: fetch as any,
            uri: `http://localhost:${process.env.PORT}`,
        }),
    })

    private response: any

    public async send(request: Request) {
        this.response = this.isMutation(request.payload)
                        ? await this.client.mutate({
                            mutation: request.payload,
                        })
                        : await this.client.query({
                            query: request.payload,
                        })
    }

    public createRequest() {
        return new Request()
    }

    public getResponse() {
        return this.response
    }

    private isMutation(payload: any) {
        return payload.definitions[0].operation === 'mutation'
    }
}

export const client = new HttpClient()
