import { GraphQLServer } from 'graphql-yoga'
import { directives } from './api/auth/directives'
import resolvers from './api/resolvers'
import schema from './api/schema'
import { formatError } from './api/utils/format-error'
import { checkJwt, getCurrentUser } from './auth/auth-service'
import { Context } from './context'

export class Server {

    public static async start() {
        this.server.express.post(this.server.options.endpoint!, checkJwt)
        this.server.express.post(
            this.server.options.endpoint!,
            (req, res, done) => getCurrentUser(
                req, res, done, this.server.context),
        )
        if (!this.runningInstance) {
            this.runningInstance = await this.server.start({
                cors: {
                    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                    optionsSuccessStatus: 204,
                    origin: '*',
                    preflightContinue: false,
                },
                formatError: (error) => formatError(error),
                port: process.env.PORT,
            })
        }
        return this.runningInstance
    }

    public static async stop() {
        if (!this.runningInstance) {
            return
        }
        await this.runningInstance.close()
        this.runningInstance = null
    }

    private static runningInstance: any = null

    private static server = new GraphQLServer({
        context: new Context(),
        directiveResolvers: directives,
        resolvers,
        typeDefs: schema,
    })
}

const getToken = (request: any) => {
    const pattern = /Bearer (.*)/
    const match = request.headers.authorization &&
        request.headers.authorization.match(pattern)
    if (match) {
        return match[1]
    }
    return undefined
}
