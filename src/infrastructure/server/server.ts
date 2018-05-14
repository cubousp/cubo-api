import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { Context } from './context'

export class Server {

    private static runningInstance: any  = null
    private static server = new GraphQLServer({
        typeDefs: './src/infrastructure/server/schema.graphql',
        resolvers: resolvers as any,
        context: new Context()
    })

    static async start() {
        if (!this.runningInstance) {
            this.runningInstance = await this.server.start({
                port: process.env.PORT
            })
        }
        return this.runningInstance
    }

    static async stop() {
        if (!this.runningInstance) return
        await this.runningInstance.close()
        this.runningInstance = null
    }
}