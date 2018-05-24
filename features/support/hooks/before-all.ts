import { BeforeAll } from 'cucumber'
import { Server } from '../../../src/server'

BeforeAll({ timeout: 10 * 1000}, async () => {
    await Server.start()
    console.log(`Test server is running on http://localhost:${process.env.PORT}`)
})
