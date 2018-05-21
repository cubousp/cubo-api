import { Before } from 'cucumber'
import { cleanUpTestDatabase } from '../../../test-utils/database'

Before(async() => {
    await cleanUpTestDatabase()
})
