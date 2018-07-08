import { GraphQLServer } from 'graphql-yoga'
import { directives } from './api/auth/directives'
import { formatError } from './api/utils/format-error'
import resolvers from './api/resolvers'
import schema from './api/schema'
import { Context } from './context'

export class Server {

    public static async start() {
        if (!this.runningInstance) {
            this.runningInstance = await this.server.start({
                formatError: (error) => formatError(error),
                port: process.env.PORT,
            })
        }
        return this.runningInstance
    }

    public static async stop() {
        if (!this.runningInstance) { return }
        await this.runningInstance.close()
        this.runningInstance = null
    }

    private static runningInstance: any  = null

    private static server = new GraphQLServer({
        context: ({ request }) => new Context(getToken(request)),
        directiveResolvers: directives,
        resolvers,
        typeDefs: schema,
    })
}

const getToken = (request: any) => {
    const pattern = /Bearer (.*)/
    const match = request.headers.authorization &&
                  request.headers.authorization.match(pattern)
    if (match) { return match[1] }
    return undefined
}
