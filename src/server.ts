import { GraphQLServer } from 'graphql-yoga'
import { formatError } from './api/format-error'
import { resolvers } from './api/resolvers/index'
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
        context: new Context(),
        resolvers,
        typeDefs: './src/api/schema.graphql',
    })
}
