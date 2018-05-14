import { BeforeAll } from 'cucumber'
import { Server } from '../../../src/infrastructure/server/server'

BeforeAll(async() => {
    await Server.start()
    console.log(`Test server is running on http://localhost:${process.env.PORT}`)
})

