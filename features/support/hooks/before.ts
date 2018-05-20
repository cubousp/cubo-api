import { Before } from 'cucumber'
import { cleanUpDatabase } from '../../../test-utils/database'

Before(async() => {
    await cleanUpDatabase()
})
