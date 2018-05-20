import { AfterAll } from 'cucumber'
import { Server } from '../../../src/server'

AfterAll(async () => {
    console.log(`Shutting down test server...`)
    await Server.stop()
})
