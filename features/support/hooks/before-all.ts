import { BeforeAll } from 'cucumber'
import { Server } from '../../../src/server'

BeforeAll(async () => {
    await Server.start()
    console.log(`Test server is running on http://localhost:${process.env.PORT}`)
})
